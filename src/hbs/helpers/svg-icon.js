import fs from 'fs';
import path from 'path';
import ltx from 'ltx';

const nameToModule = {};
const cache = {};

function parse(xml) {
  const svg = ltx.parse(xml);
  if (svg.name !== 'svg') {
    throw new TypeError('Input must be an SVG');
  }

  delete svg.attrs.xmlns;
  delete svg.attrs['xmlns:xlink'];

  return svg;
}

function svgHelper(name, opts, Handlebars) {
  const filePath = nameToModule[name] || (nameToModule[name] = path.resolve(__dirname, '..', '..', name));
  const content = cache[name] || (cache[name] = fs.readFileSync(filePath, 'utf-8'));
  const svg = parse(content);

  Object.assign(svg.attrs, opts.hash);

  return new Handlebars.SafeString(svg.root().toString());
}

module.exports.register = (Handlebars) => {
  Handlebars.registerHelper('svg', (name, options) => svgHelper(name, options, Handlebars));
};
