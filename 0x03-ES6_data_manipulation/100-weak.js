const weakMap = new WeakMap();

function queryAPI(obj) {
  let count = weakMap.get(obj) || 0;
  count += 1;
  if (weakMap.get(obj) >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(obj, count);
}

export { weakMap, queryAPI };
