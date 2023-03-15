function sum(a) {
  let currentSum = a;

  function fn(b) {
    currentSum += b;
    return fn;
  }

  fn.toString = function() {
    return currentSum;
  };

  return fn;
}
