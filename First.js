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
/*function getdata (data,another_data){
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
});*/

//promise

/*let promise=new Promise((resolve, reject) => {
    console.log("This is promise");
    resolve("Finally finished");
    reject("try again");
    
})*/
/*function getdata (data,another_data){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data=",data);
            resolve("sucess");
            if (another_data){
                another_data();
            }
        },2000);
    })
 
}
    
let promise=getdata(234);
console.log(promise);
*/

/*const getdata=()=> {
return new Promise((resolve, reject) => {
    console.log("This is promise");
  resolve("sucess");
  //reject("sorry");
});   
};
let promise=getdata();
promise.then(()=>{
    console.log("Then print message or do somework after promise fulfilled"); 
});
/*promise.catch(()=>{
    console.log("Then print message or do somework after promise fulfilled"); 
});*/

//Promise chain
/*function getdata (){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data1");
            resolve("sucess");
            
        },2000);
    });
 
}
function getdata2 (){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data2");
            resolve("sucess");
            
        },4000);
    });
 
}
console.log("Data 1 loading");
getdata().then(()=>{
    console.log("Data 2 loading");
    getdata2().then(()=>{
    });
});*/

function getdata(data){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data",data);
            resolve("sucess");
            
        },2000);
    });
 
}
console.log("Getting data1....");
getdata(1).then(()=>{
    console.log("Getting data2....");
    return getdata(2);
})
.then((res)=>{
    console.log("Getting data3....");
    return getdata(3);
}).then((res)=>{
    console.log(res);
    
});

