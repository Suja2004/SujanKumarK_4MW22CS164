const findMax =(a)=>{
    if(a.length==0)
        return null;
    let max=a[0];
    for(let i=1;i<a.length;i++){
        if(a[i] > max){
            max = a[i];
        }
    }
    return max;
}
let a=[1,5,3,9,2,7,4]
// let a=[]
console.log(findMax(a))