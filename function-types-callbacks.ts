// Function Types & Callbacks

function add(n1: number, n2: number): number {
    return n1 + n2
}

function printResult(num: Number) {
    console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    const num = cb(result)
    console.log("Return from callback", num) // Typescript doesn't catch this logic error
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

addAndHandle(10, 20, (result) => {

    console.log("Result from callback", result)
    return result
})