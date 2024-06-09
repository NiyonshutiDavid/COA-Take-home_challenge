function hasSubarrayWithSum(arr, target) {
    let currentSum = 0;
    const sumSet = new Set();
    sumSet.add(0);

    for (let num of arr) {
        currentSum += num;
        if (sumSet.has(currentSum - target)) {
            return true;
        }
        sumSet.add(currentSum);
    }

    return false;
}

// Example Usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target)); // Output: true

