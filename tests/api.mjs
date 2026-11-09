import assert from 'node:assert/strict';
const base=process.env.VELORA_TEST_URL||'http://127.0.0.1:5173';
if(!['localhost','127.0.0.1','[::1]'].includes(new URL(base).hostname))throw Error('This suite is restricted to localhost.');
const home=await fetch(base+'/');assert.equal(home.status,200);assert.match(await home.text(),/VELORA/);
const photo=await fetch(base+'/photos/hero.jpg');assert.equal(photo.status,200);assert.ok(photo.headers.get('content-type')?.startsWith('image/'));
const login=await fetch(base+'/signin-with-chatgpt?return_to=%2F',{redirect:'manual'});
assert.equal(login.status,302);const cookie=login.headers.get('set-cookie')?.split(';')[0];assert.ok(cookie);
const headers={'Content-Type':'application/json',cookie};
const request=(body,extra={})=>fetch(base+'/api/garage',{method:'POST',headers:{...headers,...extra},body:typeof body==='string'?body:JSON.stringify(body)});
const created=[];
try{
assert.equal((await fetch(base+'/api/garage')).status,401);
assert.equal((await fetch(base+'/api/garage',{headers:{'oai-authenticated-user-id':'fake','oai-authenticated-user-email':'fake@example.test'}})).status,401);
assert.equal((await request('{')).status,400);
assert.equal((await request({kind:'draft',payload:{brand:'BMW',model:'M5',year:2020,km:-5,price:1,city:'İstanbul'}})).status,400);
assert.equal((await request({kind:'draft',payload:{}},{origin:'https://untrusted.example'})).status,403);
const save=await request({kind:'draft',payload:{brand:'QA example',model:'Test draft',year:2020,km:5000,price:45000,city:'İstanbul'}});assert.equal(save.status,201);created.push((await save.json()).id);
let items=(await(await fetch(base+'/api/garage',{headers})).json()).records;assert.ok(items.some(x=>created.includes(x.id)));assert.equal(items.find(x=>x.id===created[0]).payload.currency,'EUR');
assert.equal((await fetch(base+'/api/garage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'delete',id:created[0]})})).status,401);
const inquiry=await request({kind:'inquiry',payload:{carId:'v001',date:new Date(Date.now()+7*86400000).toISOString().slice(0,10),message:'QA demo only'}});assert.equal(inquiry.status,201);created.push((await inquiry.json()).id);
assert.equal((await request({kind:'inquiry',payload:{carId:'fake',date:new Date(Date.now()+7*86400000).toISOString().slice(0,10),message:''}})).status,400);
for(const id of created)assert.equal((await request({action:'delete',id})).status,200);
items=(await(await fetch(base+'/api/garage',{headers})).json()).records;assert.ok(!items.some(x=>created.includes(x.id)));
console.log('Local API integration passed: demo sign-in, authentication, spoofed-header rejection, validation, cross-origin rejection, draft/viewing persistence, protected deletion and cleanup.');
}finally{for(const id of created)await request({action:'delete',id});}
