let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());// переводим map в массив, чтобы были доступны методы массивов

keys.push("more");

alert(keys); // name, more