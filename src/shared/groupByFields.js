const groupByFields = (arr, fields) => {
  if (fields.length === 0) {
    return arr;
  }

  const field = fields[0];
  const grouped = arr.reduce((acc, item) => {
    const fieldValue = item[field];
    if (!acc[fieldValue]) {
      acc[fieldValue] = [];
    }
    acc[fieldValue].push(item);
    return acc;
  }, {});

  const result = {};
  for (const key in grouped) {
    result[key] = groupByFields(grouped[key], fields.slice(1));
  }
  return result;
};

export default groupByFields;