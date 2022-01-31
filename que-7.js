let year = prompt("Enter A Year");


function checkLeapYear(year){

if(year%400 == 0 && year%100 == 0)
{
    return true;
}
else if(year%100 == 0 && year%400 == 0) {
    return true;
}
else{
    return false;    
}

}

checkLeapYear(year) ? console.log("Leap Year") : console.log("Not a Leap Year");