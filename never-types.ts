// Never types

let userInput: unknown
let userName: string

userInput = 5
userInput: "Max"

//Use unknown type inside an extra check
if(typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw{message: message, errorCode: code} // never type
    while(true) {} // never type
}

generateError('An error occured', 500)
