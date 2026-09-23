import fs from 'node:fs';

const html = fs.readFileSync('index.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
if (!script) throw new Error('Inline application script not found.');
new Function(script);

const unique = values => [...new Set(values)];
const nav = unique([...html.matchAll(/data-go="([^"]+)"/g)].map(match => match[1]));
const screens = unique([...html.matchAll(/data-screen="([^"]+)"/g)].map(match => match[1]));
const next = unique([...html.matchAll(/data-next="([^"]+)"/g)].map(match => match[1]));
const missing = unique([...nav, ...next]).filter(target => !screens.includes(target));
if (missing.length) throw new Error(`Missing screen target(s): ${missing.join(', ')}`);

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
const duplicates = unique(ids.filter((id, index) => ids.indexOf(id) !== index));
if (duplicates.length) throw new Error(`Duplicate ID(s): ${duplicates.join(', ')}`);

for (const required of ['v1.0.0', 'localStorage', 'JSON.stringify', 'window.print', 'releaseDecision']) {
  if (!html.includes(required)) throw new Error(`Required capability marker missing: ${required}`);
}

if (/<script\s+src=|<link[^>]+rel=["']stylesheet|\bfetch\s*\(|XMLHttpRequest/.test(html)) {
  throw new Error('Unexpected external runtime dependency or network call detected.');
}

for (const file of ['README.md', 'LICENSE', 'CHANGELOG.md', 'SECURITY.md', 'CONTRIBUTING.md', 'TEST-REPORT.md']) {
  if (!fs.existsSync(file) || fs.statSync(file).size === 0) throw new Error(`Missing required file: ${file}`);
}

console.log(`RADIOREADY validation passed: ${screens.length} screens, ${ids.length} unique IDs.`);
