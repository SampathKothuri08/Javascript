// 1. Define a variable called name and set it equal to a string that contains your name. Then, demonstrate how you would change its value to your full name.

let name = 'Sampath'

name = 'Sampath Kothuri'

// 2. How would you compare two variables, a and b, to check equality?

let a = 7
let b = '7'

console.log(a===b)


// 3. Write an if...else statement in JavaScript that checks if a number stored in a variable age is greater than 18. If true, it should log "Adult" to the console; otherwise, it should log "Minor".

let age = 20

if(age > 18){
    console.log("Adult")
}
else{
    console.log("Minor")
}

// 4. Create a for loop that iterates from 0 to 10, but only prints even numbers to the console.

for(let i = 0; i<=10;i++){
    if(i % 2==0){
        console.log(i)
    } 
}

// 5. Given an array numbers, write a while loop that continues to sum the numbers until the sum is greater than 100, then exits the loop.

let arr = [10,20,30,40,50,60,70,80,90]

let sum = 0
let i =0
while(sum  < 100){
    sum = sum + arr[i]
    i++
}

console.log(sum)


// 6. Define a function named calculateArea that takes two parameters, width and height, and returns the area of a rectangle. // width * height

function calculateArea (width, height){
    return width * height
}

let area = calculateArea(7,13)
console.log('The area of the rectange is',area )


