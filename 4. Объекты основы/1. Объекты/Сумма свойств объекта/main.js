let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function getSumValues(obj) {
  const sum = Object.values(obj).reduce((sum, item) => sum + item, 0);
  return sum;
}

console.log(getSumValues(salaries));