
function spy(func) {

  function wrapper(...args) {

    wrapper.calls.add(args);  // если записываем и повторяющиеся вызовы , то:  wrapper.calls.push(args);
    func(...args);
  }
  wrapper.calls = new Set(); // если записываем и повторяющиеся вызовы , то: wrapper.calls = [];

  return wrapper;
}

function work(a, b) {
  alert(a + b);
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert('call:' + args.join()); // "call:1,2", "call:4,5"
}