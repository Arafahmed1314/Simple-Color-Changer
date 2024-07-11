const body=document.querySelector("body");

const buttons=document.querySelectorAll(".color");
buttons.forEach((item)=>{
  item.addEventListener("click",(e)=>{
if(e.target.id==="yellow")
body.style.backgroundColor=e.target.id;
if(e.target.id==="red")
body.style.backgroundColor=e.target.id;
if(e.target.id==="green")
body.style.backgroundColor=e.target.id;
if(e.target.id==="aqua")
body.style.backgroundColor=e.target.id;
  })
})