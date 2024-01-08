export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents.reduce((sum, obj) => sum + obj.id, 0);
}
