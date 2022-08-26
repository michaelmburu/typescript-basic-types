// Unknown types
// Better alternative to any but used rarely

let userInput: unknown
let userName: string

userInput = 5
userInput: "Max"

//Use inside an extra check
if(typeof userInput === 'string') {
    userName = userInput;
}
