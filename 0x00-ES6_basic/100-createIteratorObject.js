export default function createIteratorObject(report) {
  const names = [];
  Object.values(report.allEmployees).map((v) => names.push(...v));
  return names;
}
