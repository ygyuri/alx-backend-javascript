export default function cleanSet(set, startString) {
  const matchingValues = [];

  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  //   eslint-disable-next-line
    for (const value of set) {
    if (value && value.startsWith(startString)) {
      matchingValues.push(value.slice(startString.length));
    }
  }

  return matchingValues.join('-');
}
