removePunctuation = function(userInput){
  var punctuationless = userInput.replace(/[?.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var finalString = punctuationless.replace(/\s/g,"");
  alert(finalString);
  return finalString;
}

var getStringLength = function(finalString){
  var stringLength = finalString.length;
  return stringLength;
}

var squareSize = function(input) {
  for index
}
