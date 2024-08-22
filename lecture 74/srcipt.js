let button = document.getElementById("btn")

button.addEventListener("dblclick",()=>{
    documemt.queryselector(".box").innerHTML ="<b>yayy you were clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu",()=>{
   alert("dont hack us by right click please")
})

button.addEventListener("keydown",(e)=>{
   console.log(e,e.key ,e.keyCode)
})