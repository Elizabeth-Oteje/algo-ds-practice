const findMaxConsecutiveOnes = function(nums) {
    // check nums.length < 1
    if (nums.length < 1) {
        return;
    }
    
    // nums = [1,1,0,1,1,1]
    
    let onesCount = 0;
    let max = 0;
    
    for (let num of nums) {
        
        // check if is 0 or 1 else do nothing
        if (num !== 0 && num !== 1) {
            return;
        }
         
        if (num === 1) {
            onesCount++;
        } 
        
        max = Math.max(max, onesCount);
        
        if (num === 0) {
            onesCount = 0;
        } 
      
    }
    
    return max;
};