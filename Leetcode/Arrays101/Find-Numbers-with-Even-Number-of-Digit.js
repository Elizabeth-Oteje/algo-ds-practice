const findNumbers = function(nums) {
    // nums = [12,345,2,6,7896]
    let sumOfEven = 0;
    
    if (nums.length < 1 || nums.length > 500) {
        return;
    }
    
    for (let num of nums) {
          if (num < 1 && num > 10000) {
              return;
          }
        
        // Using Hint #1
        // How to compute the number of digits of a number ?
        const numOfDigits = String(num).length
        
        if (numOfDigits % 2 === 0) {
            sumOfEven++
        }
        
    }
    
    return sumOfEven;
    
};