


//  QUESTION
// GET THE FIBONACCI SEQUENCE
//This code will output the first 10 numbers of the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.


//ANSWER

const fibonacci =()=>{

    const val =[];

    return function (n){
        for(let i=0;i<n;i++){
            // val.push(i+(i+1));
            if(i==0){
                val.push(0);
            }
            else if(i==1){
                val.push(1);
            }
            else{
                const result = val[i-1]+val[i-2] ;
                val.push(result); 
                // console.log(result)
            }

            // else {
            //     // val.push(val[i]+val[i-1]) );
            //     const result = val[i] + val[i-1];
            //     val.push(result);

            //     // val.push((val[i]+val[i-1]) )
            // }

        }
        return val;
    }

    // for()

}

let val = fibonacci();

console.log(val(10));


