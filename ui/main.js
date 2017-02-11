console.log('Loaded!');
//Change the text
var element=document.getElementById('main-text');
element.innerHTML="New Value ";
// Make the image move

var img=document.getElementById("madi");
var marginLeft=0;
function moveRight()
{
    marginleft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick = function(){
    var interval=setInterval(moveRight(),50);
};