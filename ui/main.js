console.log('Loaded!');
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
};