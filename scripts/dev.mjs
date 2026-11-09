import { fileURLToPath } from 'node:url';
const [command = 'dev'] = process.argv.slice(2);
process.argv = [process.execPath, fileURLToPath(new URL('../node_modules/vinext/dist/cli.js', import.meta.url)), command, ...(command === 'dev' ? ['--port', '5173'] : [])];
await import('../node_modules/vinext/dist/cli.js');
