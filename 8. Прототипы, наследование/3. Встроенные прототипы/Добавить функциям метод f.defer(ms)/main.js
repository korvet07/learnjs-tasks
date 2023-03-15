Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};

function fn() {
  alert("Hello!");
}

fn.defer(1000); 