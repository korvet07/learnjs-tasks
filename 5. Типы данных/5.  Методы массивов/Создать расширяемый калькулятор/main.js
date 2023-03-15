function Calculator() {

  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      name = split[1],
      b = +split[2]

    if (!this.methods[name] || isNaN(a) || isNaN(b)) {
      return `Введите строку в формате "a + b"`;
    }

    return this.methods[name](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}