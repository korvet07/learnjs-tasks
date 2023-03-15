const calculator = {
  read() {
    this.valueOne = +prompt('Введите первое значение');
    this.valueTwo = +prompt('Введите второе значение');
  },

  sum() {
    return this.valueOne + this.valueTwo;
  },

  mul() {
    return this.valueOne * this.valueTwo;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());