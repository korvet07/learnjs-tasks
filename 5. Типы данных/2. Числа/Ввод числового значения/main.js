function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while (!isFinite(num));

  if (!num || num.trim() == '') return null; // добавил проверку на пробелы, чтобы не выводился 0 при введении пробелов

  return +num;
}

alert(`Число: ${readNumber()}`);