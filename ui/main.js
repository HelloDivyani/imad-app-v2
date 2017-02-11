console.log('Loaded!');
//Change the text
var element=document.getElementById('main-text');
element.innerHTML="New Value ";
// Make the image move
var img=document.getElementById("madi");
img.onclick = function(){
    img.style.marginLeft='100px';
};