export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: newGrades.reduce((grade, newGrade) => (newGrade.studentId === student.id ? newGrade.grade : grade), 'N/A'),
    }));
}
