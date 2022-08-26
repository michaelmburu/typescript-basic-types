const person3 = {
    name: 'James',
    age: 59,
    hobbies: ['Gambling', 'Driving']
}

let favoriteMorningActivities:  string[]
favoriteMorningActivities = ["Football"]

let favoriteAfternoonActivites: any[]
favoriteAfternoonActivites = ["Basketball", 2]


console.log(favoriteAfternoonActivites)

for(const hobby of person3.hobbies) {
    console.log(hobby.toUpperCase())
}