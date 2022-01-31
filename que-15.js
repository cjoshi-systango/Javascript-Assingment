let salaries= {
    A : 3000,
    B : 4000,
    C : 5000
    }
    var sum=0;
for (let i = 0 in salaries) {
    sum=sum+salaries[i];
}
console.log(sum);