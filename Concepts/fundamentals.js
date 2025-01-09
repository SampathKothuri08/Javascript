console.log('Hey there!')

sentence = 'I\'m Sampath'

console. log(sentence)

let a = 10
let b = 20

console.log(a + b)
console.log(a-b)
console.log(a * b)
console.log(a/b)
console.log(a % b)

let c = 3 ==3 
console.log(c)

console.log(typeof c)


let fav_player = 'Thomas Muller'  //thomas muller is my favorite footballer

// if conditions in javascript

if(5===5){    // === strict Equal (no type coercion)
    console.log('Get me a chocolate')
}
else{
    console.log('Get me an ice cream')
}

if(10-3==7 && 6%2 == 1){
    console.log('I love javascript')
}
else{
    console.log('I do like javascript but maybe love java more')
}


// while loop

let i = 10

while(i >0){
    console.log('On the count of ', i)
    i--
}

console.log('Enough let\'s implement for loop in Javascript')

// Find the floor value of the square root of 40
let ans =0
for(let a = 1; a * a <= 40 ;a++){
   ans = a
}
console.log("The floor square root value of 40 is ", ans)


function invokeme(firstname, lastname){
    return {firstname,lastname}
}

let name = invokeme('Sampath','Kothuri')
console.log(name)
console.log(typeof name)
