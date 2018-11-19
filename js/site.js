


// JQuery example
var $jqName = $('HELLO');
var $jqValue = $('.jqValue');

$jqName.on('input', function(event){
  $jqValue.html($jqName.val());
});
