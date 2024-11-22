const repeatString = function(string, num) {
  let fstr = "";
  if (num < 0){
    return "ERROR";
  }
  for (let i = 0; i < num; i++){
    fstr += string;
  }
  return fstr;
};

// Do not edit below this line
module.exports = repeatString;
