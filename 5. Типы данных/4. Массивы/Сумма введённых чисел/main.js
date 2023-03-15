function sumInput() {
  let arr = [];

  while (true) {
    let num = prompt("Введите число", 0);

    if (!num || !isFinite(num) || num.trim() == '') break;

    arr.push(+num);
  }

  return arr.reduce((sum, item) => sum + item, 0);;
}
sumInput();