// 1. How do you create a string that includes both static text and the value of the variable name, using template literals?

let val= 'Lahm'

console.log(`${val} was the best RB in the world`)

// 2. Convert the following function into an arrow function syntax:
function add(a, b) {
    return a + b;
  }
  


  let arrow_add_function = (a,b)=>{
    return a + b
  }

  console.log(arrow_add_function(2,3))



  // 3. Given an object person with properties name and age, use object destructuring to
  //  create two variables name and age, extracting the values from the object.

  const person = {
    name: 'james',
    age: 27
  }

  const{ name, age} = person

  console.log(name, age)


  // 4. Given an array colors with the values ['red', 'green', 'blue'], use array destructuring to create three variables named first, second, and third, assigning the first, second, and third elements of the array to them, respectively.

const colors_array = ['red', 'green', 'blue']


let[first, second, third] = colors_array

console.log(first, second, third)

// 5. How do you create a new array combined that contains all elements of arrays arr1 and arr2 using the spread operator?
let arr1 = [1, 2, 3, 7]
let arr2 = [4, 5, 6, 7]


let combined_arr = [...arr1,...arr2]

console.log(combined_arr)


// 6. How do you create a new object combinedObject that merges the properties of two objects obj1 and obj2, with properties from obj2 overwriting those in obj1 if they exist in both objects?

let obj1 = { name: 'henry', age: 14 }
let obj2 = { name: 'gregothy', color: 'blue' }


let combined_obj = {   // If keys are are duplicate, the last spread object overwrites earlier values
    ...obj1,
    ...obj2
}

console.log(combined_obj)


// 7. How do you safely access the street property of address inside an object user that may not exist, using optional chaining?

const user = { name: 'james' }

console.log(user?.address?.street)


// 8. Define a function greet(name, greeting = "Hello") that takes a name and an optional greeting. If the greeting is not provided, it should default to "Hello".


let greet = ((name, greeting = "Hello")=>{
    console.log(`${greeting} ${name}!`)
})

greet('Thiago', 'Welcome')

// 9. Explain the difference between let and const keywords, and give an example of when you would use each.

let a = 10
a= 5
console.log(a)

const b = 20
// b = 15  // This throws an error as  the const variable can't be altered
console.log(b) 

//10. Write a for...of loop that iterates over an array numbers and logs each number to the console.

let new_array = [1, 2, 3, 4]


//forEach() method
new_array.forEach((current_val)=>{
    console.log(current_val)
})


//For loop
// for(let i = 0;i<new_array.length;i++){
//     console.log(new_array[i])
// }

// 11. Given an array of numbers, use the map method to create a new array with each number squared.

let original_array = [2, 4, 5, 6, 8, 93]

let squared_array = original_array.map((current_val)=>{
    return current_val * current_val
})
console.log(squared_array)

// 12. How would you use the ternary operator to assign "adult" to a variable ageStatus if age is 18 or over, and "minor" if under 18?

let current_age = 18

let agestatus = current_age >= 18 ? "adult" : "minor"

console.log(agestatus)


// 13. How do you use the logical AND operator to execute a function logMessage() only if the variable isLoggedIn is true?

const logMessage = () => { console.log('logged in') }


let isLoggedIn = true 

isLoggedIn && logMessage()   // Logical operator in javascript works in a short circuiting way


// 14. How can you use the logical OR operator to assign a default value of "guest" to a variable username if the current user.name is undefined or null?


let user_2 = {
    name : ""
}

let username = user_2.name || "guest"

console.log(username)


