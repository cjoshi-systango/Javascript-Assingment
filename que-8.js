function getValue1(callback) {
    setTimeout(() => {
        console.log('A')
    }, 1000)
    callback(getValue3)
}
function getValue2(callback) {
    setTimeout(() => {
        console.log('B')
        setTimeout(callback(), 1000);
    }, 3000)
}
function getValue3() {
    setTimeout(() => {
        console.log('C')
    }, 2000)
}
function AllValues() {
    getValue1(getValue2);
}
AllValues()