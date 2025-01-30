// arrow functions
const greet = ()=>{
    return "Hello"
}

console.log(greet())



// ternary operator

let number = 5

let answer = number % 2 ==0 ? 'Even' : 'Odd'

console.log(answer)


let userName = undefined   // In javascript values like null, undefined, false, 0 ,NaN and empty string are false

let displayName = userName ? userName : 'Phil'

console.log(displayName)


//Optional chaining

const user = {
    profile : {
        name : 'Arjun'
    }
}

console.log(user.profile.name)
console.log(user?.address?.city)



// Object destructuring
let person = {
    name : 'Manny',
    age : 18
}

const {name : person_name, age } = person
console.log(person_name , age)




//Array destructuring 

let arr = [10,20,30]

let [value1, , value3] = arr

console.log(value1, value3)


// template literal strings

const name = 'jay pritchett'

const show = 'Modern family'

console.log(`${name} is my favorite character in ${show}`)


// short circuiting 


let a = 10
let b = 5

let ans1 = (a % 2 ==0 && b % 2 ==0) ? "Both are even numbers" : "At least one of them is not even"

let ans2 = (a % 2 ==0 || b % 2 ==0) ? "At least one of them is even" : "Both are odd numbers"
 
console.log(ans1)
console.log(ans2)

//Enhanced object literals

const address = "Los Angeles"
const tvshow = "Modern Family"

person = {
    ...person,  //spread operator
    address,
    tvshow
}

console.log(person)

// spread operator

let num1 = [10,20,30,40,50]
num2 = [...num1,60,70,80,90]

console.log(num2)



//Array methods

//foreach loop

// syntax of foreach loop - 

// array.forEach(function(currentValue, index, array) {
//     // your code here
// });


let fruits = ['banana', 'apple','mango','orange','cherry']

fruits.forEach((fruits,index) =>{
    console.log(`Fruit at index ${index} is ${fruits}`)
})




// map() method

// syntax 
// array.map(function(currentValue, index, array) {
//     // return transformed value
// });


let numbers = [1,2,3,4,5,6]

let product = numbers.map((number)=>{

    return number * 2
})

console.log(product)



// filter() method

//syntax

// array.filter(function(currentValue, index, array) {
//     // return true or false
// });


let subjects = ['maths','physics','chemistry','English','EVS']

let exam = subjects.filter((sub)=>{
    return sub.length > 5
})

console.log(exam)



//reduce() method

//syntax

// array.reduce(function(accumulator, currentValue, index, array) {
//     // return the updated accumulator
// }, initialValue);


let n = 10

let fibonacci = Array(n).fill(0).reduce((arr,_, i)=>{
    if(i ==0 || i==1){
        arr[i] = i
    }
    else{
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr
},[])

console.log(fibonacci)