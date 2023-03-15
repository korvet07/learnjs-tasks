const time = {};

const isEmpty = (obj) => {
  return Object.keys(obj).length !== 0 ? true : false;
}
console.log(isEmpty(time));
time["8:30"] = "get up";
console.log(isEmpty(time));