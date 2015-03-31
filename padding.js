
var padded_string = pad(18, 5, '.');
console.log(padded_string, padded_string.length);

function pad(num, width, character){
  var paddedValue = '';
  if(typeof num === 'undefined') return '';
  var str = num.toString();
  var charactersToAdd = width - str.length;
  var character = character || " ";

  for(var i = 0; i < charactersToAdd; i++){
    paddedValue += character;
  }


  return paddedValue + str;


}
