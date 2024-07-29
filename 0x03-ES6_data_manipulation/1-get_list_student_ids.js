export default function getListStudentIds(getListStudents) {
  if (typeof getListStudents !== 'object') {
    return [];
  }
  const ids = [];
  getListStudents.map(({ id }) => ids.push(id));
  return ids;
}
