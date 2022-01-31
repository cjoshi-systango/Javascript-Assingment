console.log("js LOADED")
let box1=document.getElementById("div_1");
let box2=document.getElementById("div_2");


box1.addEventListener("click",function(){
    box1.style.backgroundColor="green"; 
})
box2.addEventListener("click",function(){
    box2.style.backgroundColor="red"; 
})