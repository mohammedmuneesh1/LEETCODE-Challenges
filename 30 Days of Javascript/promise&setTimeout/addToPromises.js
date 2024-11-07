

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(12);
    },3000);

});
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(12);
    },3000);

});


async function addTwoPromises(promise1,promise2){

    return  (await promise1) + (await promise2);

}

const val = await addTwoPromises(promise1,promise2);
console.log(val)  


// console.log((addTwoPromises(promise1,promise2)).promiseResult) 
// console.log((addTwoPromises(promise1,promise2))) 

// const promise2 = (val)=>{
    
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//               resolve(val+14);
//         },3000)
//     })
// }



//  promise1.then( (res)=>{
//     return promise2(res).then((res2)=>{
//         val=res2;
//         return res2;
//     }).catch((error)=>{
//         console.log(error);
//     }).finally(()=>{
//         console.log("the operation is over")
//     })
// })

// promise1.then((res) => {
//     return promise2(res)
//         .then((res2) => {
//             val = res2;
//             return res2;
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//         .finally(() => {
//             console.log("the operation is over");
//         });
// });


// console.log("this is the value7",val)





// let val = promise1.then((res)=>{
//     promise2(res).then((res2)=>{
//         return res2;
//     }).catch((error)=>{
//         console.log(error);
//     }).finally(()=>{
//         console.log("the operation is over")
//     })
// });


// console.log("this is the value",val)
// console.log("this is the value",val)



























// const res - promise1.then((res)=>)

// const val = promise1.then((res)=>{


//     let promise2 = new Promise((resolve,reject)=>{
//         resolve(setTimeout(()=>{

//             return 

//         },3000))
//     })
    
    
    
//     promise2.then((res)=>{
//         console.log(res)
//     }).catch(error=> console.log(error)).finally(()=>{
//         console.log("the operation is over")
//     })
// });

// console.log("this is the value",val);
// val();
