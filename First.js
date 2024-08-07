/*//synchronous 
console.log("One");
console.log("two");
console.log("three");
//Asynchronous
console.log("One");
console.log("two");
console.log("three");
setTimeout(()=>{
   hello= console.log("Hi");9000
});
console.log("Four");*/
//call backs
/*function sum (a,b){
    console.log(a+b);
}
function calculator(a,b,callback) {
    callback(a,b);
}
calculator(3,4,sum);*/

//callback hell 
function getdata (data,another_data){
    setTimeout(()=>{
        console.log("data=",data);
        if (another_data){
            another_data();
        }
    },2000);
 
}
getdata(1,()=>{
    console.log("This is callback hell");
    getdata(2,()=>{
        console.log("This is callback hell");
        getdata(3,()=>{
            console.log("This is callback hell");
            getdata(4);
            
        });
    });
});