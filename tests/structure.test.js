const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const fromRoot = (...parts) => path.join(root, ...parts);

function exists(relativePath) {
  return fs.existsSync(fromRoot(relativePath));
}

function isDirectory(relativePath) {
  return fs.statSync(fromRoot(relativePath)).isDirectory();
}

function isFile(relativePath) {
  return fs.statSync(fromRoot(relativePath)).isFile();
}

const expectedDirectories = [
  'docs',
  'src',
  'assets',
  'assets/images',
  'assets/audio',
  'assets/fonts',
  'tests',
  'prototypes',
];

for (const directory of expectedDirectories) {
  assert.ok(exists(directory), `Missing directory: ${directory}`);
  assert.ok(isDirectory(directory), `Expected a directory: ${directory}`);
}

const expectedFiles = [
  'README.md',
  '.gitignore',
  'docs/idea.md',
  'docs/dev-log.md',
  'docs/roadmap.md',
  'src/index.html',
  'src/app.js',
  'src/audio-patch.js',
  'src/patch-handlers.js',
  'src/routine-defaults.js',
  'src/styles.css',
];

for (const file of expectedFiles) {
  assert.ok(exists(file), `Missing file: ${file}`);
  assert.ok(isFile(file), `Expected a file: ${file}`);
}

const html = fs.readFileSync(fromRoot('src/index.html'), 'utf8');
const localAssetReferences = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((reference) => !reference.startsWith('http'))
  .map((reference) => reference.split('?')[0]);

for (const reference of localAssetReferences) {
  assert.ok(exists(path.join('src', reference)), `Broken src/index.html reference: ${reference}`);
}

console.log('Repository structure smoke test passed.');
