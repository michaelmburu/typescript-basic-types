// Literal Types
// Defined using a pipe symbol as seen on resultConversion below

function combine(input1: number | string, input2: number | string, resultConversion: "as-number" | "as-text") {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2
    }
    else {
        result = input1.toString() + input2.toString()
    }
    // if(resultConversion === 'as-number') {
    //     return +result //parseFloat(result)
    // }
    // else {
    //     result = result.toString()
    // }
    return result
}


const combineAges = combine(20, 80, 'as-number')
console.log(combineAges)

const combineStringAges = combine("20", "80", 'as-number')
console.log(combineStringAges)

const combineNames = combine("Michael", "Mburu", 'as-text')
console.log(combineNames)