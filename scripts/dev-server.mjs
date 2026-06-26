import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { execFileSync } from 'node:child_process';

execFileSync('node', ['scripts/build.mjs'], { stdio: 'inherit' });

const port = Number(process.env.PORT ?? 5173);
const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };

createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? '/', `http://${request.headers.host}`);
    const pathname = url.pathname === '/' ? '/index.html' : url.pathname;
    const safePath = normalize(pathname).replace(/^\.\.(\/|\\|$)/, '');
    const filePath = join(process.cwd(), 'dist', safePath);
    const file = await readFile(filePath, 'utf8');
    response.writeHead(200, { 'Content-Type': mime[extname(filePath)] ?? 'text/plain' });
    response.end(file);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not found');
  }
}).listen(port, '0.0.0.0', () => {
  console.log(`PayLedger AI prototype running at http://localhost:${port}`);
});
