// Function as Types

// Describe explicity which type of functions should be used
function add(n1: number, n2: number): number {
    return n1 + n2
}

function printResult(num: Number) {
    console.log('Result: ' + num)
}

printResult(add(5, 12))

let combinedValues: Function // Set type stored as function

combinedValues = add //Assign function as type

console.log(combinedValues(8, 8))

combinedValues = printResult //Assign function as type

console.log(combinedValues(8, 8))

let newCombinedValues: (a: number, b: number) => number
newCombinedValues = add
//newCombinedValues = printResult // Throws error