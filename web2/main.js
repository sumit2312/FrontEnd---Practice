var myMessage = document.getElementById("message");
var colors = ["red","orange","green"];

var counter=0;

function changeColor(){
    myMessage.style.background=colors[counter];
    counter++;

    if(counter==colors.length)
    counter=0
}

setInterval(changeColor,500);