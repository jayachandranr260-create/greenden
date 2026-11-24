var menu=document.getElementById("menu")
var navbar=document.getElementById("navbar")
var closebar=document.getElementById("closebar")

menu.addEventListener("click",function(){
    navbar.style.right="0"
})
closebar.addEventListener("click",function(){
    navbar.style.right="-50%"
})

var inputbox=document.getElementById("inputbox")
var container=document.getElementById("container")
var list=container.querySelectorAll("div")

inputbox.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()

    for(count=0;count<list.length;count=count+1){
        var productname=list[count].querySelector("h2").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            list[count].style.display="none"
        }
        else{
            list[count].style.display="block"
        }
    }
})