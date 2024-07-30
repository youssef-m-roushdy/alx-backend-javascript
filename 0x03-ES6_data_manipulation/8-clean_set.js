export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  const arr = [];
  set.forEach((string) => {
    if (string.startsWith(startString)) {
      arr.push(string);
    }
  });
  const fullStr = arr.join('-');
  return fullStr;
}
