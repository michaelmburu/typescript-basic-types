// Function Return Types & Void
// Specify explicilty return types. Not preferred
function add(n1: number, n2: number): number {
    return n1 + n2
}

function printResult(num: Number) {
    console.log('Result: ' + num)
}

printResult(add(5, 12))

let someValue = undefined //Not usefull but comes in handy in few cases