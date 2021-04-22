const { performance } = require("perf_hooks");
// generate array of 4000 random numbers
var arr = [];
for (var i = 0, t = 4000; i < t; i++) {
  arr.push(Math.round(Math.random() * t));
}

const fn = () => {
  arr.map((x) => x * 2);
};

const fn2 = () => {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    res.push(arr[i] * 2);
  }
};

function measure(f, n) {
  let start = performance.now();
  for (let i = 0; i < n; i++) f();
  let end = performance.now();
  console.log((end - start) / n);
}

measure(fn);
