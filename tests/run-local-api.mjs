import {spawn} from 'node:child_process';
const server=spawn(process.execPath,['scripts/dev.mjs','dev'],{stdio:['ignore','pipe','pipe'],detached:true});
let started=false;
const timeout=setTimeout(()=>finish(1,'Local server did not start within 60 seconds'),60000);
function finish(code,message){clearTimeout(timeout);if(message)console.log(message);try{process.kill(-server.pid,'SIGTERM')}catch{}process.exitCode=code;}
server.stdout.on('data',data=>{process.stdout.write(data);if(!started&&data.toString().includes('Local:')){started=true;const test=spawn(process.execPath,['tests/api.mjs'],{stdio:'inherit',env:{...process.env,VELORA_TEST_URL:'http://127.0.0.1:5173'}});test.on('exit',code=>finish(code??1));}});
server.stderr.on('data',data=>process.stderr.write(data));
server.on('error',error=>finish(1,error.message));

server.on('exit',code=>{if(!started)finish(code||1,'Local development server exited before readiness. Stop any existing server before testing.');});
