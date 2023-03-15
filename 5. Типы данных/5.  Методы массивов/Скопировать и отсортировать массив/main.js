function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS", "JSON"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr );