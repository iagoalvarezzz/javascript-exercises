const sumAll = function(first, last) {
  if (first < 0 || last < 0){
    return "ERROR";
  }
  
  if (typeof(first) !== "number" || typeof last !== "number"){
    return "ERROR";
  }

  if (parseInt(first) !== first || parseInt(last) !== last){
    return "ERROR";
  }
  
  if (first > last){
    let tmp = first;
    first = last;
    last = tmp;
  }
  let sum = 0;
  for (let i = first; i <= last; i++){
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
