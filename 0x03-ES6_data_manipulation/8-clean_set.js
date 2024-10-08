export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0 || !(set instanceof Set)) {
    return '';
  }
  const str = Array.from(set)
    .filter((str) => str.startsWith(startString) && typeof str === 'string')
    .map((str) => str.slice(startString.length)).reduce((acc, cur) => `${acc}-${cur}`);

  return str;
}
