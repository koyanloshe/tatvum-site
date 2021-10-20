/*
// Smooth Scroll To A Desired Left Or Right DIV
// Code From: www.exeideas.com
//<![CDATA[
// Change x To y If You Want To Scroll Top/Bottom
function scrolltoDiv(id_divto){
if(document.getElementById(id_divto).offsetLeft == window.pageXOffset){
clearInterval(Divabord);
}else{
var Divabord = setInterval(function(){
var currentPos = window.pageXOffset;
var destinatPos = document.getElementById(id_divto).offsetLeft;
var calcPos = parseInt(destinatPos)-(currentPos);
var x = 25;
var xu = 25;
var xul = parseInt(currentPos)+(xu);
var incrementX;
if(currentPos < destinatPos){
if(xul > destinatPos){
x= 1;
}
var incrementX = x++;
positionX = parseInt(currentPos)+(incrementX);
}
if(currentPos > destinatPos){
if(xul < destinatPos){
x= 1;
}
var incrementX = x++;
positionX = parseInt(currentPos)-(incrementX);
}
window.scrollBy(positionX,0);
window.scrollTo(positionX,0);
if(document.getElementById(id_divto).offsetLeft == window.pageXOffset){
clearInterval(Divabord);
}
},1);
}
}
//]]>
*/