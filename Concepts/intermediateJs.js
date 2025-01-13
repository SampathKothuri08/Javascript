let club = 'real madrid'
console.log(club.indexOf('ad'))  // indexOf returns the index of a particular character passed into the parenthesis

console.log(club.split(" "))  // splits the string at whatever character is passed as an argument to the method.

// An empty string would split the string into array of every character
console.log(club.split(""))

console.log(club.split('a'))

console.log(club.includes("da"))  // return true of false depending on whether or not the string includes the value

console.log(club.replace('ma','var')) // No offense intended madrid fans

console.log(club.replaceAll('real','atletico')) 


let firstname = 'Sampath'
let lastname = 'Kothuri'

let fullname = firstname + " "+ lastname
console.log(fullname)


console.log("log"-10) // NaN(not a number)

//String concatenation
console.log('7' + 3) // The string coerces the numeric value into a string tuype and add them togetheras if they are strings

console.log('5'- 2) // 3


// Modifying arrays

let colors = ['orange', 'blue', 'red']

console.log(colors[1])
console.log(colors[20]) // undefined

console.log(colors) // Before updating

colors[1] = 'purple'
console.log(colors) // After updating
console.log(colors[1])

// Array methods

console.log(colors.push('pink'))

console.log(colors.unshift('Yellow'))

console.log(colors)
colors.pop()
colors.shift()

console.log(colors)

let all_the_colors = colors.join('_')
console.log(all_the_colors)


console.log(colors.indexOf('orange'))

console.log(colors.includes('pink'))

colors[3] = 'gray'

console.log(colors.sort())

console.log(colors.slice(0,2))


colors = colors.slice(0,2).concat(colors.slice(3))
console.log(colors)


// Modifying objects

let person  = {
    name : 'Ben',
    age :  12,
    Grade : 5,
    
    Address : 'SanFransciso, California',

    hobbies : 'Playing chess , Watching football'


}

console.log(person.name)
console.log(person['age'])

// updating in an object

person.name = 'Phil'
console.log(person)
console.log(typeof person)

delete person.Address

console.log(person.Address) // undefined- it was deleted 

const keys_in_person = Object.keys(person)

console.log(typeof keys_in_person)
console.log(keys_in_person)

const val = Object.values(person)
console.log(val)

console.log(Object.entries(person))


module.exports = {
    club,
    colors,
    person
}