// Union Types
// Created using a pipe symbol

function combine(input1: number | string, input2: number | string) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' ) {
        result = input1 + input2
    }
    else {
        result = input1.toString() + input2.toString()
    }
    return result
}


const combineAges = combine(20, 80)
console.log(combineAges)

const combineNames = combine("Michael", "Mburu")
console.log(combineNames)