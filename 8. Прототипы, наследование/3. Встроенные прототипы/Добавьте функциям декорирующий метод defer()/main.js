Function.prototype.defer = function(ms) {
  let f = this;
  
  return function(...args) {
    setTimeout(() => f.apply(f, args), ms);
  }
};


function fn(a, b) {
  alert( a + b );
}

fn.defer(1000)(1, 2);