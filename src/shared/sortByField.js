const sortByField = (arr, field) => {
  const sortedArray = [...arr]; 

  sortedArray.sort((a, b) => {
    const valueA = a[field].toLowerCase(); 
    const valueB = b[field].toLowerCase(); 

    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1; 
    }
    return 0;
  });

  return sortedArray;
}

export default sortByField;