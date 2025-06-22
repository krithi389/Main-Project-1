var container=document.querySelector(".container")


function opennn()
{
    container.style.left="0"
}
function closes()
{
      container.style.left="-60%"
}


var searchto=document.querySelector(".searchto")
var types=document.querySelectorAll(".types")
var combinee=document.querySelectorAll(".types div")


searchto.addEventListener("keyup",function (){
    var processs=event.target.value.toUpperCase()

    for(i=0;i<combinee.length;i=i+1)
    {
        var paras=combinee[i].querySelector("p").innerHTML
        if(paras.toUpperCase().indexOf(processs)<0)
        {
            combinee[i].style.display="none"
        }
        else
        {
             combinee[i].style.display="block"
        }
    }
})