import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

execFileSync('tsc', { stdio: 'inherit' });
await mkdir('dist', { recursive: true });
const html = await readFile('index.html', 'utf8');
await writeFile(
  'dist/index.html',
  html.replace('/src/styles.css', '/assets/styles.css').replace('/src/main.ts', '/assets/main.js'),
);
await cp('src/styles.css', 'dist/assets/styles.css');
