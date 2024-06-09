/**
 * Checks if an array contains a subarray with a sum equal to the target value.
 *
 * @param {number[]} arr - The array to search in.
 * @param {number} target - The target sum value.
 * @return {boolean} True if a subarray with the target sum is found, false otherwise.
 */
function hasSubarrayWithSum(arr, target) {
    // Initialize variables to keep track of the current sum and the set of sums encountered so far.
    let currentSum = 0;
    const sumSet = new Set();
    // Add the initial sum (0) to the set.
    sumSet.add(0);

    // Iterate through each number in the array.
    for (let num of arr) {
        // Update the current sum by adding the current number.
        currentSum += num;
        // If the set already contains the difference between the current sum and the target,
        // it means we have found a subarray with the target sum.
        if (sumSet.has(currentSum - target)) {
            return true;
        }
        // Add the current sum to the set.
        sumSet.add(currentSum);
    }

    // If no subarray with the target sum is found, return false.
    return false;
}

// Example Usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target)); // Output: true
