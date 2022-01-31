let number = prompt("Enter a number");
number = parseInt(number);
function isEven(number) {
    if (number < 0) {
        number = Math.abs(number);
    }
    if (number === 0) {
        return true;
    }
    if (number === 1) {
        return false;
    }
    else {
        number = number - 2;
        return isEven(number);
    }
}
alert(isEven(number));