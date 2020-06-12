
var checkbox = $("input[name=checkboxName]:checked");
var col1 = "";
var col2 = "";
var col3 = "";
var col4 = "";
var col5 = "";
var col6 = "";

checkbox.each(function(i){
  var tr = checkbox.parent().parent().eq(i);
  var td = tr.children();
  col1 = td.eq(1).text();
  col2 = td.eq(2).text();
  col3 = td.eq(3).text();
  col4 = td.eq(4).text();
  col5 = td.eq(5).text();
  col6 = td.eq(6).text();
});

var $checkAll = $('#checkAll');
$checkAll.change(function () {
  var $this = $(this);
  var checked = $this.prop('checked'); 
  $('input[name="checkboxName"]').prop('checked', checked);
});

var boxes = $('input[name="checkboxName"]');
boxes.change(function () {
  var boxLength = boxes.length;
  var checkedLength = $('input[name="checkboxName"]:checked').length;
  var selectAll = (boxLength == checkedLength);
  $checkAll.prop('checked', selectAll);
});


