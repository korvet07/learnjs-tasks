let dictionary = Object.create(null, {
  toString: { // определяем свойство toString
    value() { 
      
      return Object.keys(this).join();
    }
  }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";


for(let key in dictionary) {
  alert(key); 
}


alert(dictionary); 