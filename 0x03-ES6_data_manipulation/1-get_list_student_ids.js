export default function getListStudentIds(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  const ids = [];
  getListStudents.map(({ id }) => ids.push(id));
  return ids;
}
