const removeFromArray = function(array, ...args) {
  const finalArray = array.filter((word) => !args.includes(word));
  console.log(finalArray);
  return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
