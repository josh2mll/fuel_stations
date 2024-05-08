const sortByKeys = (obj) => {
  const sortedKeys = Object.keys(obj).sort((a, b) => a.localeCompare(b, 'uk'));
  const sortedObj = {};

  for (const key of sortedKeys) {
    sortedObj[key] = obj[key];
  }

  return sortedObj;
}

export default sortByKeys;