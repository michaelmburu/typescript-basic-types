// Tuples
// Always explicitly define tuples, union types are defined by default
const person4 :{
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string] //Explicitly defined tuple, default 
} = {
    name: 'Josephine',
    age: 47,
    hobbies: ["Walking", "Running"],
    role: [1, 'admin']
}



//This doesn't work
person4.role.push('author')
person4.role[0] = 2


//This works and replaces the role
person4.role = [1, 'Audit']

console.log(person4)