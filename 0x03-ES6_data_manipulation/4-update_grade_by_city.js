export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents
    .filter(({ location }) => location === city)
    .map((student) => {
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}
