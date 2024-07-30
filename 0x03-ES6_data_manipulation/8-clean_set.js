export default function cleanSet(set, startString) {
  if (!set && !startString && !(set instanceof Set) && typeof startString !== 'string') {
    return '';
  }
  const str = Array.from(set)
    .filter((str) => str.startsWith(startString) && typeof str === 'string')
    .map((str) => str.slice(startString.length)).reduce((acc, cur) => `${acc}-${cur}`);

  return str;
}
