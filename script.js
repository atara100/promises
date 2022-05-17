
let promiseA=new Promise((resolve,reject)=>{
     console.log("קובץ 1 עוד לא עלה");
setTimeout(()=>{
 let arr1=[1,2,3,4,5,6];
  arr1.forEach(element => {
    let res1=element*2;
    resolve(console.log(res1))
  });
     console.log("קובץ 1 עלה✨");

 },3000);
  setInterval(printStatusA,3000);
});

let promiseB=new Promise((resolve,reject)=>{
    console.log("קובץ 2 עוד לא עלה");
    setTimeout(()=>{
 let arr1=[1,2,3,4,5,6];
  arr1.forEach(element => {
    let res1=element*3;
   resolve(console.log(res1));
   });
    console.log("קובץ 2 עלה✨");
 },6000);
 setInterval(printStatusB,23000);
});

let promiseC=new Promise((resolve,reject)=>{
 console.log("קובץ 3 עוד לא עלה");
setTimeout(()=>{
 let arr1=[1,2,3,4,5,6];
  arr1.forEach(element => {
    let res1=element*4;
    resolve(console.log(res1));
  });
console.log("קובץ 3 עלה✨");
 },8000);
 setInterval(printStatusC,3000);
});

function printStatusA(){
    console.log(promiseA,"promise a");
};

function printStatusB(){
    console.log(promiseB,"promise b");
};

function printStatusC(){
    console.log(promiseC,"promise c");
};