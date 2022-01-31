async function getValue1() {
    promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('A')
        }, 1000)
    })
    await getValue2()
}
async function getValue2() {
    promise = new Promise(function (resolve, reject) {

        setTimeout(async () => {
            console.log('B')
            await getValue3()
        }, 3000)
    })
}
async function getValue3() {
    promise = new Promise(function (resolve, reject) {

        setTimeout(() => {
            console.log('C')
        }, 2000)
    })

}
async function AllValues() {
    await getValue1()
}
AllValues();