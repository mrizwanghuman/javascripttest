$(document).ready(function(){
	
$(".mainrow").each(function(){

  var mainrow = $(this);

$("button.btn", mainrow).on('click', function(){
 
  
$(".displaynone", mainrow).toggle();
if($(this).text()==="+"){
$(this).text("-")}else{$(this).text("+")}
$(".displaynone").not($(".displaynone", mainrow)).hide().prev().find("button.btn").text("+");
return false;

});
});

});