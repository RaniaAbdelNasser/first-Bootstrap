$(function () {
var arr=[];
var go;



 for (var i = 1; i < 22; i++) {
arr[i-1]= go;
go="<tr><td>" + i + "</td>"+
"<td> P" + i + "</td>"+
"<td>0.00</td></tr>";
}
$(".fe").html(arr);

})
$(function () {
  var arr=[];
  var go;

  $(".b2").click(function () {

$("thead").addClass("dis")
for (var i = 1; i < 22; i++) {

arr[i-1]= go;
go="<div class='bg-dark align-self-start  p-3' >" + i + "<br>"+
" P" + i + "<br>"+
"0.00</div>";
}
$("#t2").html("<div class='d-flex bb flex-wrap align-items-start'>"+arr+"</div>")

}) })
$(function () {

$(".b1").click(function () {
  $("thead").removeClass("dis")
  var arr=[];
  var go;


   for (var i = 1; i < 22; i++) {
  arr[i-1]= go;
  go="<tr><td>" + i + "</td>"+
  "<td> P" + i + "</td>"+
  "<td>0.00</td></tr>";
  }
  $(".fe").html(arr);


  })
})
