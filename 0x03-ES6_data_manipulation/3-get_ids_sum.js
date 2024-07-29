export default function getStudentIdsSum(getListStudents) {
  return getListStudents.map(({ id }) => id).reduce((acc, cur) => acc + cur);
}
