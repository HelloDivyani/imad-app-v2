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
    //Create a quest object
    var request = new XMLHttpRequest();
    
    request.onreadystatechange  = function()
    {
      // Check 
      if(request.readyState === XMLHttpRequest.DONE)
      {
          if(request.status === 200)
          {
              // do some action
              var counter=request.responseText;
              var span=document.getElementById('count');
              span.innerHTML=counter.toString();
              
              
          }
      }
    };
    
    
    request.open('GET','http://hellodivyani.imad.hasura-app.io/counter',true);
    request.send(null);
    
};

// Email
var nameInput=document.getElementById('name');
var name= nameInput.value;
var subButton = document.getElementById('sub');
subButton.onclick=function(){
    var names=['name1','name2','name3','name4'];
    var list='';
    var ulist = document.getElementById('nameList');
    for(var i=0;i<names.length;i++)
    {
        list+='<li>'+names[i]+'</li>';
        
    }
    ulist.innerHTML=list;
    
    
};





























