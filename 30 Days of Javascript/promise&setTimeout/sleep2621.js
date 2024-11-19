




const sleep = (time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(time);
        },time)
    })
}


sleep(1000).then((res)=>{
    console.log(res);
}).catch(error=>console.log(error)).finally(()=>{
    console.log("the operation is over"); 
})




// const sleep = new Promise ((resolve,reject)=>{
//     return resolve(setTimeout(()=>{

//     }))
// })