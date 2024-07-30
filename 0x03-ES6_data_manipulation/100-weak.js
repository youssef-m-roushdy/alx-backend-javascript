const weakMap = new WeakMap();

function queryAPI(obj) {
  if (weakMap.has(obj)) {
    if (weakMap.get(obj) >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(obj, weakMap.get(obj) + 1);
  } else {
    weakMap.set(obj, 1);
  }
}

export { weakMap, queryAPI };
