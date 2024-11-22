const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(args) {
	let result = 0;
  for (let i = 0; i < args.length; i++){
    result += args[i];
  }
  return result;
};

const multiply = function(args) {
  let result = 1;
  for (let i = 0; i < args.length; i++){
    result *= args[i];
  }
  return result;
};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(n) {
	let result = 1;
  for (let i = n; i > 0; i--){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
