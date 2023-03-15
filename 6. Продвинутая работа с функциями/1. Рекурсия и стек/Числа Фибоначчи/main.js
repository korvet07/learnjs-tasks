const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2)); // короткий вариант

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
} // оптимизированный вариант

alert(fib(3));
alert(fib(7));
