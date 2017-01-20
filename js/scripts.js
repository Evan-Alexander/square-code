
var stringLength;
var arrayLength = "";
var arrayDepth = "";

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

var squareSize = function() {
	stringLength = parseInt(stringLength);
  var stringLengthRoot = Math.sqrt(stringLength);
  console.log("stringLengthRoot" + stringLengthRoot)
  var stringLengthRootCeiling = Math.ceil(stringLengthRoot);
  console.log("stringLengthRootCeiling" + stringLengthRootCeiling)
  var stringLengthRootFloor = Math.floor(stringLengthRoot);
  console.log("stringLengthRootFloor" + stringLengthRootFloor)
  if (stringLengthRootFloor == stringLengthRootCeiling){
    arrayLength = stringLengthRootFloor;
    arrayDepth = stringLengthRootFloor;
  } else if ((stringLengthRootFloor * stringLengthRootCeiling)<stringLength){
    arrayLength = stringLengthRootCeiling;
    arrayDepth = stringLengthRootCeiling;
  } else {arrayLength = stringLengthRootCeiling;
  arrayDepth = stringLengthRootFloor;
  };
  answersPlease = arrayLength;
	return answersPlease;
};
