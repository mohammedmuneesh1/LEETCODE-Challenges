

const expectResult = (val1)=>{
    return {
        toBe:(toBeVal)=>{
            if(val1 === toBeVal){
                return true;
            }
            else{
                throw new Error("Not Equal");
            }
        },
        notToBe:(notToBeVal)=>{
            if(val1 !== notToBeVal){
                return true
            }
            else{
                throw new Error("Equal");
            }
        }
    }
}

console.log(expectResult(5).notToBe(5))