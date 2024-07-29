export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter(({ location }) => location === city);
}
