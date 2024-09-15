let nums = [2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let result = nums.reduce((max,el)=>
{
    if(el>max){
        return el;
    } else{
        return max;
    }
})