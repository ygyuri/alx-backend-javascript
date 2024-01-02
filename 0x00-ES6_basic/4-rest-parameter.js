export default function returnHowManyArguments(...theArgs) {
  let counter = 0;
  for (const x of theArgs) {
    if (x) {
      counter += 1;
    }
  }
  return counter;
}
