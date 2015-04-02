$(document).ready(function(){

  var maxChars = 140;
  var inputBox = $('#textbox');
  var count = $('#count');

  inputBox.on('keyup', checkAndUpdateCount);

  checkAndUpdateCount();

  function checkAndUpdateCount(event){
    var currentText = inputBox.val();
    var remaining = maxChars - currentText.length;

    if(remaining > 20) {
      count.removeClass('warn');
    } else {
      count.addClass('warn');
    }

    if(remaining >= 0) {
      count.text(remaining);
    } else {
      count.text(0);
      var truncate = currentText.substring(0, maxChars-1);
      inputBox.val(truncate);
    }

  }

});
