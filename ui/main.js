/*console.log('Loaded!');
//Change the text
var element=document.getElementById('main-text');
element.innerHTML="New Value ";
// Make the image move
var myMargin=0;
var img=document.getElementById("madi");
function moveRight()
{
    myMargin=myMargin+1;
    img.style.marginLeft=myMargin+'px';
}
img.onclick = function(){
   
    var interval=setInterval(moveRight,50);
};**/

var counter=0;
var button=document.getElementById('counter');
button.onclick=function(){
  
  counter=counter+1;
  var span=document.getElementById('count');
  span.innerHTML=counter.toString();
  
};