
//Synchronous Programming

// console.log('hello')
// console.log('hi')
// console.log('sitcom')


//Asynchronous Programming

// console.log('start')

// setTimeout(()=>{
//     console.log("Asynchronous Programming")
// }, 1000)

// console.log("end")

// for(let i=0;i<10;i++){
//     console.log(i)
// }

//Callbacks

function greet(goodbye){
    console.log("How's it going? ")
    goodbye()
}

function goodbye(){
    console.log("Good bye!")
}

greet(goodbye)



//callback hell

// function dailyroutine(){

//     console.log("Wake up at 6'o clock ")
//     setTimeout(()=>{
//         console.log("Take a bath")
//         setTimeout(()=>{
//             console.log("Have breakfast")
//             setTimeout(()=>{
//                 console.log("Set off for the university")
//                 setTimeout(()=>{
//                     console.log("Get on the bus")
//                     setTimeout(()=>{
//                         console.log("Get off the bus")
//                         setTimeout(()=>{
//                             console.log("Walk to the university from the bus stop")
//                         },2000)
//                     },1000)
//                 },2000)
//             },2000)
//         },1000)
//     },1000)
// }

// dailyroutine()


//Promises

// function wakeup(){
//     return new Promise((resolve)=>{
//         console.log("Wake up at 6'o clock")
//         resolve()
//     })
// }

// function takeABath(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Take a bath")
//             resolve()
//         },1000)
//     })
// }

// function haveBreakfast(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let milk = prompt("Do you have milk ?")
//             if(milk){
//                 console.log("Have Breakfast")
//                 resolve()
//             }
//             else{
//                 reject("Ran out of milk")
//             }
//         },1000)
//     })
// }


// function setOffForUni(){ 
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let flunk = prompt("Are you going to the University? ")
//             if(flunk){
//                 console.log("Set off for the University")
//                 resolve()
//             }
//             else{
//                 reject("I'm not going to the University today")
//             }
//         },2000)
//     })
// }


// function getOnTheBus(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Get on the bus")
//             resolve()
//         },2000)
//     })
// }

// function getOffTheBus(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Get off the bus")
//             resolve()
//         },1000)
//     })
// }

// function walkToTheuni(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Walk to the University from the bus stop")
//             resolve()
//         },2000)
//     })
// }
// function dayroutine(){
//     wakeup()
//     .then(()=>{
//         return takeABath()
//     })
//     .then(()=>{
//         return haveBreakfast().catch(function(message){   // local catch - It doesn't break the .then() chain if there's an error
//             console.log(message)
//             return "skipped breakfast"   
//         })
//     }).
//     then(()=>{
//         return setOffForUni()
//     })
//     .then(()=>{
//         return getOnTheBus()
//     })
//     .then(()=>{
//         return getOffTheBus()
//     })
//     .then(()=>{
//         return walkToTheuni()
//     })
//     .catch(function(message){
//         console.log(message)
//     })
// }

// dayroutine()   // Calling dayroutine:


// Triggers the wakeup function.
// wakeup executes its logic (logs "Wake up at 6'o clock") and calls resolve(), fulfilling the Promise.
// How .then() Works:

// The resolve() in wakeup triggers the first .then() in the chain.
// This .then() calls takeABath.
// takeABath runs, returns a Promise, and calls resolve() when done, moving to the next .then().
// Handling haveBreakfast:

// If haveBreakfast fails (i.e., reject() is called), the local .catch() within that .then() catches the error.
// The local catch ensures the chain continues by returning a fallback value ("skipped breakfast").
// The next .then() executes without breaking the chain.
// Global .catch():

// If any function rejects without being handled locally (like in setOffForUni), the global .catch() at the end is triggered.
// This stops further execution because Promise rejection is propagated if not caught locally.
// Flow After .catch():

// If the global .catch() is executed, the remaining .then() functions are skipped.
// However, if a local .catch() handles an error, the chain resumes as normal.


//async and await

async function fetchData(){
    try{
        const res = await fetch('https://dummyjson.com/products/1')
        const data = await res.json()
        console.log(data)
        console.log(data.id)
    }
    catch(e){
        console.log(e)
    }
}

fetchData()