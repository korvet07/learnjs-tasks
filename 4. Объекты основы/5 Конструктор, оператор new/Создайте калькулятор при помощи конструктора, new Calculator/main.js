function Calculator() {
  this.read = function () {
    this.valueOne = +prompt('Введите первое значение');
    this.valueTwo = +prompt('Введите второе значение')
  };
  this.sum = function () {
    return this.valueOne + this.valueTwo;
  };
  this.mul = function () {
    return this.valueOne * this.valueTwo;
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );