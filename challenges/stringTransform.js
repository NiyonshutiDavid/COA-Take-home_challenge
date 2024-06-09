/**
 * Transforms a given string based on certain conditions.
 *
 * @param {string} str - The string to be transformed.
 * @return {string} The transformed string.
 */
function transformString(str) {
    // Get the length of the string
    const length = str.length;

    // Check if the length is divisible by 15
    if (length % 15 === 0) {
        // If divisible by 15, reverse the string and convert each character to its ASCII code,
        // then join them with a space
        return str.split('')
            .reverse()
            .join('')
            .split('')
            .map(char => char.charCodeAt(0))
            .join(' ');
    }
    // Check if the length is divisible by 3
    else if (length % 3 === 0) {
        // If divisible by 3, reverse the string
        return str.split('').reverse().join('');
    }
    // Check if the length is divisible by 5
    else if (length % 5 === 0) {
        // If divisible by 5, convert each character to its ASCII code and join them with a space
        return str.split('')
            .map(char => char.charCodeAt(0))
            .join(' ');
    }
    // If none of the above conditions are met, return the original string
    else {
        return str;
    }
}

// Example Usage:
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"

