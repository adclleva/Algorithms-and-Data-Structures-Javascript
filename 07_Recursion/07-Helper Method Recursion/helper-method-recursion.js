function collectOddValues(arr){
    
    let result = [];
    /**
     * typically we will have the results from our recursive helper function to be outside 
     * of the recursive functon in order for the results to persist when the function get's recursively called
     */

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])