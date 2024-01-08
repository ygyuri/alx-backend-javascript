export default function createInt8TypedArray(length, position, value) {
  const array = new ArrayBuffer(length);
  const Int8 = new DataView(array);

  try {
    Int8.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return Int8;
}
