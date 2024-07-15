// const a=10
// var b= 20
// let c=12.22
// let d =true
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(typeof(d))
// const obj ={
//     name:"sujan",
//     age: 19
// }
// console.log(obj)
// console.log(obj.name)
// console.log(obj.age)
// let a=[1,2,3,4,5]
// for(i=0;i<5;i++)
//     console.log(a[i])
// console.log(a)
// let a=['s','u','j','a','n']
// for(i=0;i<5;i++)
//     console.log(a[i])
// console.log(a)
// let a=2
// if(a){
//     console.log('hello')
// }
// else if(a==2){
//     console.log("hello hello")
// }
// else{
//     console.log("bye")
// }
// let age=18
// if(age>=18){
//     console.log("You can vote")
// }
// else{
//     console.log("You can't vote")
// }
// let a='sujan'
// console.log(`hello ${a}`)

// function hello(){
// console.log('hello')
// }
// hello();

// document.addEventListener("click",()=>{
// console.log('hello')
// });
// const hello=()=>{
//     console.log('hello')
// };
// hello()

// function returnitem(item){
//     return item + 100;
// }

// const res = returnitem(100);
// console.log(res);

// function multiply(value){
//     return value*12;
// }

// console.log(multiply(10));

// for(let i=0;i<5;i++){
//     console.log(i)
// }

// let a=[1,2,3,4,5]
// for(let i of a){
//     console.log(i)
// }

//  a=[1,2,3,4,5]
// for(let i in a){
//     console.log(i)
// }

// const obj ={
//     name:"sujan",
//     age:19,
//     section:'c'
// }

// for(let i in obj){
//     console.log(`key: ${i} \t value: ${obj[i]}`)
// }

// let a=1;

// while(a!=10){
//     console.log("value",a++)
// }

// do{
//     console.log("value",a--);
// }while(a>0);

// let a=[1,2,3,4,5]

// a.map((value,index)=>{
//     console.log(`${index}`,`${value}`)
// })

// a=['s','u','j','a','n']
// a.forEach((value,index)=>{
//     console.log(`${index}`,`${value}`)
// })

// function even(a){
//     let b=[];
//     // let j=0;
// for(let i=0;i<a.length;i++){
//     if(a[i]%2==0){
//         b.push(a[i])
//         // b[j]=a[i];
//         // j++;
//     }
//     console.log(i+1)

// }
// return b;
// }
// let a=[1,2,3,4,5,6,7,8,9,10]
// let b=even(a);
// console.log(b)

//promises 1.pending 2.resolve 3.reject
// callback hell
// let p = new Promise((resolve,reject)=>{
//     resolve("yes")
//     reject("no")
// })

// let p = new Promise((resolve,reject)=>{
//     let a=10
//     if(a>=18){
//     resolve("vote")
//     }
//     else{
//     reject("no vote")
//     }
// })

// p.then((m)=>{
// console.log(m)
// })
// p.catch((e)=>{
// console.log(e)
// })

// setTimeout(() => {
//     console.log("hello")
// }, 3000);

