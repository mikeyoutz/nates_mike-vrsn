
var ttt = ['x', 'x', 'x',
           '',  '',  'x',
           'o', '',  'x'];

var lookups = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

function forEach(array, callback_fn){
  for(var i = 0; i < array.length; i++) {
    var aLookup = array[i];
    callback_fn(aLookup, i);
  }
}

forEach(lookups, checkItems);

function checkItem(aLookup){
  if(checkForWin(ttt, aLookup)) {
      console.log(aLookup);
  }

}

lookups.forEach(checkItem);


function checkForWin(board, match){
  if(board[match[0]]
    && board[match[0]] === board[match[1]]
    && board[match[1]] === board[match[2]]){
      return true;
    }
  return false;
}
