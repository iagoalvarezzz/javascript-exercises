const fibonacci = function(n) {
  let current = 1;
  let prev = 1;
  n = +n;
  if (n < 0) return "OOPS";
  if (n === 0) return 0;
  if (n < 3) return 1;
  for (let i = 3; i <= n; i++){
    let tmp = current;
    current += prev;
    prev = tmp;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
