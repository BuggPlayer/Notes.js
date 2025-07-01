

function disappearNo(){
let arr = [4,3,2,7,8,2,3,1]





}

var findDisappearedNumbers = function(nums) {
    // Step 1: Mark the positions that correspond to the numbers seen
    for (let i = 0; i < nums.length; i++) {
        // Get the absolute value of the current number (since we might change signs)
        let num = Math.abs(nums[i]);
        // Find the index that corresponds to this number
        let index = num - 1;

        // If the number at that index is positive, make it negative to mark it as seen
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    // Step 2: Collect the numbers that were not seen
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        // If the number is still positive, it means (i + 1) was not seen in the array
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    // Return the missing numbers
    return result;
};
