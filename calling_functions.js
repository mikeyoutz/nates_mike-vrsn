

var aFunction = function(index){
  console.log('anonymous', index);
  return index * 2;
};

console.log('calling doMe with anon');
var answers = doMeXTimes(aFunction, 3);
console.log('done', answers);

function doMeXTimes(fn, times){
  var array = [];
  console.log('entering doMe');
  for(var i = 0; i < times; i++){
    var returnVal = fn(i);
    array.push(returnVal);
  }
  console.log('exiting doMe');
  return array;
}


function something(index) {
  console.log('something', index);
}
