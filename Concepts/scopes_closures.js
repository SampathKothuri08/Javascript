const {club, colors, person} = require("./intermediateJs.js")

console.log("Understanding scopes and closures in javascript")

// Hoisting
/*
JavaScript moves variable and function declarations to the top of their scope during the compilation phase.
Initializations are not hoisted, only declarations.
*/


//console.log(a) // It throws an error because let will be hoisted but can't be initialized
let a = 5;

console.log(b) //Undefined -  variables declared with var are initialized to undefined after they are hoisted.

var b = 20;

console.log(b) // 20

// console.log(c) // same reason as let, will not be intialized. Temporal deadzone applies
const c = 30


// Lexical scoping

// JavaScript looks for variables or functions in the current scope first, 
// then moves up to the parent scope, and finally to the global scope.

// If not found, a ReferenceError is thrown.

// Functions and variables both follow this chain, but function declarations are hoisted and available throughout their scope.

outer() // functions are fully hoisted
function outer(){
    let name = 'Harry Potter'
    console.log("Hey there!")

    function inner(){
        console.log(a) // It checks in the outerscope first and moves up to the global scope if the variable isn't found
        console.log("Hello", name)  // name is being accessed inside the inner function which is declared in the outer function
    }
     console.log(a) // lexical scoping

    inner()
}

// Temporal Dead Zone

// The Temporal Dead Zone (TDZ) means that variables declared with let 
// and const cannot be accessed before they are initialized,
//  while var can be accessed but is initialized to undefined.



// closures

greet()
function greet(){
    let count = 0

    function counter(){
        count++
        console.log(count)
    }
    counter()

    return counter
}

const example = greet()

example()
example()


// try catch block

let obj = {
    name : 'Thomas muller',
    club : 'Bayern munich',
    country : 'Germany',
    worldcup : true
}

try{
    throw new Error("custom error message")
    console.log(obj.ucls.count)
}
catch(e){
    console.log(e)
    console.log(obj.club)
}


console.log(club.indexOf('l'))

console.log(colors.slice(0,2))

console.log(person.name)