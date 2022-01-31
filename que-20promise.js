const getValue1 = new Promise((resolve,reject) => {
    resolve();
})
.then(function(){
    setTimeout(() => {
        console.log('A');
    }, 1000);
})
.then(function(){
    setTimeout(() => {
        console.log('B')
    }, 3000);

}).then(function (){
    setTimeout(()=>{
        setTimeout(() => {
            console.log('C')
        }, 2000)
    },1000)
})
        
getValue1;