export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    return array.map((arr) => arr.id);
  }
  return [];
}
