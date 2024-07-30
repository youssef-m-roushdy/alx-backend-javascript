export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  const arr = Array.from(set)
    .filter((str) => str.startsWith(startString))
    .map((str) => str.slice(startString.length));

  const str = arr.join('-');
  return str;
}
