// Enums
// string identifiers have downsides

//const ADMIN = 0
//const READ_ONLY = 1
//const AUTHOR = 2

// Above implimentation assigns role a number

//Enums are a better choice and not type restricted can use number, strings etc
enum Role {
    ADMIN = 1, READ_ONLY = "2", AUTHOR = 'AUTHOR'
}
const person5 = {
    name: 'Josephine',
    age: 47,
    hobbies: ["Walking", "Running"],
    role: Role.ADMIN
}

if(person5.role === Role.ADMIN) {
    console.log('is admin')
}
