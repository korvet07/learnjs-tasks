function sumTo(n) {
  let sum = 0;
  for (i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumTo(n) {
  return (n == 1) ? n : n + sumTo(--n);
}

function sumTo(n) {
  return n * (n + 1) / 2;
}
// 1)Очевидно, что самый быстрый способ- по формуле(всего з операции для любого n) далее через цикл и рекурсией. 2)Ошибка возникнет, если превышен
// максимальный размер стека.