






const sumFn = (a:number,b:number)=>{
    return a+b;
}

const memoizeFn = (executingFn:any)=>{

    let callCount=0;
    let savedVal={};

    const innerFn = (...args:number[])=>{
        let key = JSON.stringify(args);
        if( savedVal.hasOwnProperty(key) ){
            return savedVal[key];
        }

        let result = executingFn(...args);
        savedVal[key] = result;
        callCount++;
        return result;
    }
    
    innerFn.getCallCount = ()=>{
        return callCount;
    }
    return innerFn;


}