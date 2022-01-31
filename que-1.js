let date=new Date()
let day = date.getDay()
let year = date.getFullYear()
let month = date.getMonth()
let hours = date.getHours()
let minute = date.getMinutes()
let current = date.getDate()
let am_pm = hours > 11 ? "PM" : "AM"; 


let dayA =["Sunday","Monday","Tuesday","Wednesday","Thrushday","Friday","Saturday"]
let monthA =["January","February","March","April","May","June","July","August","September","October","November","December "]

console.log("Format A :")
let formatA = dayA[day].slice(0,3) +","+ monthA[month].slice(0,3) +" "+ current +","+ year +","+ hours +":"+ minute + " "+am_pm;
console.log(formatA)

console.log("Format B :")
let formatB = hours +":"+ minute + " "+am_pm +" "+ dayA[day] +","+ monthA[month] +" "+ current + year ;
console.log(formatB)

console.log("Format C :")
let formatC =  current +"/"+ (month + 1) +"/"+ year +" " + hours +":"+ minute + " "+am_pm ;
console.log(formatC)


var cmas=new Date(date.getFullYear(), 11, 25);
if (date.getMonth()==11 && date.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-date.getTime())/(one_day))+
" days left until Christmas!");