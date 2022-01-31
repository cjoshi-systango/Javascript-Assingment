console.log("JS Loaded")
var para=document.getElementById("para");
para.addEventListener("mouseover",function(){
    let colors = [ "green", "yellow","red", "orange", "blue"];

	let randomNum = Math.floor(Math.random() * colors.length);

	para.style.color = colors[randomNum];
})
function randomColor(){

	let colors = [ "green", "yellow","red", "orange", "blue"];

	let randomNum = Math.floor(Math.random() * colors.length);

	document.getElementById("para").style.backgroundColor = colors[randomNum];
}