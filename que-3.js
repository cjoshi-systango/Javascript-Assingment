let decimal = prompt("Enter Decimal Number");
let number = prompt("Specified Decimal Place");

let temp = decimal.split(".");


console.log(decimal +" ," + number + " => " + temp[0] + "." + temp[1].slice(0,number));