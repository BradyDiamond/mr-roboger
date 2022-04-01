function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}



//Business logic

function inputNumber(element) {
  const newArray= [];
  for (let i=0; i<= element ; i++) {
  newArray.push(i);
  }
  let strArray = newArray.toString();
  const splitArray = strArray.split(',');
  return splitArray;
}
function replaceNumber(element) {
  const replacedArray = [];
  const splitArray = inputNumber(element);
  splitArray.forEach(function(element) {
  if (element.includes('3')) {
    replacedArray.push("won't you be my neibor?");
  } else if (element.includes ('2')) { 
    replacedArray.push('boop!');
  } else if (element.includes ('1')) { 
    replacedArray.push('beep!');
  } else { 
  replacedArray.push(element);
}
});
  return replacedArray;
}



//UI Logic



$(document).ready(function(){
  $("form#robotner").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const number = replaceNumber(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#your-number").text(replacedArray);
    
  });
});
