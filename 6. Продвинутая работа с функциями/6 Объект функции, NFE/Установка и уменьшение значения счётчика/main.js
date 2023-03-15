function makeCounter() {

  function counter() {
    return ++counter.count;
  }
  counter.count = 0;
  counter.set = (value) => counter.count = value;

  counter.decrease = () => --counter.count;

  return counter;
}

let counter = makeCounter();
counter();//1
counter.set(5);//5
counter.decrease();//4