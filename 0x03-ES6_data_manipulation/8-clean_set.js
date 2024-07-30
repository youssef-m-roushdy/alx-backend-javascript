export default function cleanSet(set, startString) {
  const str = Array.from(set)
    .filter((str) => str.startsWith(startString))
    .map((str) => str.slice(startString.length)).reduce((acc, cur) => `${acc}-${cur}`);

  return str;
}
