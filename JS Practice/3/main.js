var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for(var i=0;i<items.length;i++){
    items[i].addEventListener("click", editItems);
    inputs[i].addEventListener("blur", updateItem);
    inputs[i].addEventListener("keypress", itemKeypress);
}

function editItems(){
    this.className = "edit";
    var input = this.querySelector("input");
    input.focus();
   // console.log("my current value id " , input.value.length);
    input.setSelectionRange(0,input.value.length);
}

function updateItem(){
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className="";   
}

function itemKeypress(event){
    if(event.which === 13){
        updateItem.call(this);
    }
}