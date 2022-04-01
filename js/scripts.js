//Business logic

function inputNumber(element) {
  const newArray= [];
  for (let i=0; i<= element ; i++) {
  newArray.push(i);
  }
  let strArray = newArray.toString();
  const splitArray = strArray.split(",");
  return splitArray;
}
function replaceNumber(element) {
  const splitArray = inputNumber(element);
  const replacedArray = [];
  splitArray.forEach(function(element) {
  if (splitArray.includes('1')); {
    replacedArray.push ('beep');
  }
  return replacedArray;
}

// if (number.includes(1)) {
//   newArray.push("beep");
// }
// replaceNumber()
// }









//UI Logic


$(document).ready(function() {
}
