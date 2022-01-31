let ageArr =[24,16,20]
let userArr = [{name:'A', age:20},{name:'B', age:17}, {name:'C', age:24}, {name:'A',
age:30},{name:'D', age:16},{name:'E', age:24}, {name:'F', age:16}, {name:'G', age:16}]

for(let i =0 ; i < ageArr.length ; i++ )
{
    for(let j =0 ; j< userArr.length; j++ )
    {
        if(ageArr[i] == userArr[j].age )
        {
            console.log(userArr[j]);
        }
    }
        
    
}