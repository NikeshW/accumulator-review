/**
 * numOfOccurences()
 *  Write an algorithm that takes in a string and determines how many of each letter there is, casing should not matter.
 * @param {string} str - A string of letters.
 * @returns {Object} letterCount - An object of all the letters w the number of times they appear in the string
 * 
 * EXAMPLE:
 *  const myString = "ccabbabbcbcb"
 *  numOfOccurences(myString);
 *  //> { a: 2, b: 6, c: 4 }
 * 
 */


// Guard clause example
// const coffeeMaker = (liquid, powder) => {
//     // Guard clause
//     if(liquid !== "water"){
//         return "We have an error: not water"
//     } else if(powder !== "coffee grounds"){
//         return "another error"
//     }
// }



function numOfOccurences(str){
    // Guard clause
    // str could not be a string
    // str length could be zero
    if(typeof str !== "string" || str.length === 0){
        return "Error"
    }



    // Initialize accumulator
    let accumulator = {}


    // Our logic goes here
    // Iterate over the string
    for (let i = 0; i < str.length; i++) {
        // Make a variable to hold each letter as we iterate
        const letter = str[i].toLowerCase();

        // If the letter does not exist in our accumulator
        if(!accumulator[letter]){
            // Add the letter to the accumulator
            accumulator[letter] = 1
        } else {
            // Add one to the letter in the accumulator
            accumulator[letter] += 1
        }
    }

    // Return accumulator
    return accumulator
}


const myLetters = numOfOccurences("AccabbabbCcbcbB")
// console.log(numOfOccurences(35))
// console.log(numOfOccurences(""))
// console.log(myLetters)







/**
 * targetLetters()
 * ----------------
 * Write an algorithm that takes in an Object that has letters as the keys and a number as the value, that will return an Array of any letters that have a value greater than the "target"
 * @param {Object} letters - An object holding all the letters w their values
 * @param {Number} target - A number 
 * @returns {String[]} - An array of strings representing each letter than has a value higher than the target
 * 
 * EXAMPLE:
 *  const myLetters = { a: 2, b: 6, c: 4 }
 *  targetLetters(myLetters, 3);
 *  //> ["b", "c"]
 * 
 */

function targetLetter(letters, target){
    // Guard clause
    // Make sure each value in letters is a number
    for (const key in letters) {
        if(typeof letters[key] !== 'number'){
            return "One of the values is not a number"
        }
    }

    if(typeof target !== 'number'){
        return "Target must be a number"
    }


    // Initialize accumulator
    let accumulator = []


    // Our logic goes here
    for (const key in letters) {
        // Prints out each key
        // console.log("Key:", key)
        // Prints out the value for each key
        // console.log("Value:", letters[key])

        // Set letters[key] to a variable for readability
        let value = letters[key]
        
        // If statement that checks if letters[key] > 3
        if(value > target){
            // Add the letter to the accumulator
            // Pushes key to the accumulator
            accumulator.push(key)
        } 
    }
    // return accumulator
    return accumulator
}

console.log(targetLetter(myLetters, "something else"))





/**
 * getCartTotal()
 * -----------------
 * Write an algorithm that will determine the total amount of all items in the cart. 
 * @param {Object[]} products - An array of products.
 * @param {number} products[].priceInCents - The price of the product, in cents.
 * @param {number} products[].quantity - The number of products being bought.
 * @returns {string} A formatted representation of the total, rounded to two decimal places.
 * 
 * EXAMPLE:
 *  const cart = [
      { name: "T-Shirt", priceInCents: 1200, quantity: 1 },
      { name: "Socks", priceInCents: 900, quantity: 2 },
    ];
    getCartTotal(cart);
 *  //> "$30.00"
 */