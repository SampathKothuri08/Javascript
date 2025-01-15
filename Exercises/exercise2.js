// 1. Array Filtering: Write a function that filters out all the even numbers from an array of integers.

let arr = [1,2,3,4,5,6,7,8,9,10]

function even_numbers(arr){
    let new_arr = []
    for(let i =0;i<arr.length;i++){
        if(i%2==0){
            new_arr.push(i)
        }
    }
    return new_arr
}


let new_arr = even_numbers(arr)

console.log(new_arr)


//  2. Object Manipulation: Given an array of objects representing people with names and ages, write a function to find the person with the highest age.

const names_and_ages = [
    {name : 'mike', age : 15},
    {name : 'peter', age : 18},
    {name : 'David', age : 10},
    {name : 'howard', age : 19}
]

function findOldestFunction(names_and_ages){

    let oldest_person = names_and_ages[0]

    for(let i=1;i<names_and_ages.length;i++){
        if(oldest_person !=null && names_and_ages[i].age > oldest_person.age){
            oldest_person = names_and_ages[i]
        }
    }
    return oldest_person
}

const oldest_person = findOldestFunction(names_and_ages)
console.log(oldest_person.name)


// 3. Data Transformation: Convert an array of strings containing numbers into an array of actual number values.

let arr_of_strings = ['2','5', '3','9','1']

let new_array_of_numbers = []

for(let i=0;i<arr_of_strings.length;i++){
    new_array_of_numbers.push(parseInt(arr_of_strings[i]))
}
console.log(new_array_of_numbers)


// 4. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'price') in ascending order.

let array_of_objects = [
    { price: 4.2 },
    { price: 8.3 },
    { price: 2.2 }

]

array_of_objects.sort(function(a,b){
    return a.price - b.price
})

console.log(array_of_objects)


// 5. Array Manipulation: Write a function that removes the first and last elements from an array and returns the modified array.

let demo_array = [0, 1, 2, 3, 4, 5]

function trim_Array(demo_array){
    let trimmed_array = demo_array.slice(1, demo_array.length-1)
    return trimmed_array
}

console.log(trim_Array(demo_array))

// 6. Object Iteration: Given an object representing a shopping cart with items and their quantities, write a function that calculates the total cost of the items.


let shopping_cart = {
    'cheese': {
        quantity: 4,
        price: 8
    },
    milk: {
        quantity: 10,
        price: 4
    }
}

function totat_cost(shopping_cart){

    let keys = Object.keys(shopping_cart)
    let cost = 0
    for(let i=0;i<keys.length;i++){
        cost = cost + (shopping_cart[keys[i]].quantity * shopping_cart[keys[i]].price)
    }
    return cost;
}

console.log(totat_cost(shopping_cart))


// 7. Object Manipulation: Write a function that deep clones an object (i.e., copies all nested objects and arrays) to prevent unintended mutations.

let friend = {
    'ritwik': {hobbies : ["watching football", "listening to music","play videogames"]}
}

function object_clone(friend){
    let new_object = {}
    let obj_keys = Object.keys(friend)

    for(let i=0;i<obj_keys.length;i++){
        new_object[obj_keys[i]] = friend[obj_keys[i]]
    }
    return new_object
}

let new_friends = object_clone(friend)

friend.likhith = {hobbies : ["playing chess", "watching football"]}

console.log(friend)

console.log(new_friends)


// 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.

let student = {
    maths : {
        grade : 10
    },
    physics : {
        grade : 8
    },
    chemistry : {
        grade : 14
    }
}

function average_grade(student){
    let total_grade =0
    let no_of_subjects = 0

    let list_of_subjects = Object.keys(student)

    for(let i =0 ;i<list_of_subjects.length;i++){
        no_of_subjects++
        total_grade += student[list_of_subjects[i]].grade
    }

    let average = total_grade/no_of_subjects
    return Math.trunc(average)
}

console.log(average_grade(student))

// 9. Scope and Closure: Create a function that returns a new function. The returned function should remember and log the number of times it's been called.

function outer(){
    let value = 0

    function inner(){
        value++
        console.log(value)
    }

    inner()

    return inner
}

const increment = outer()

increment()
increment()
increment()
increment()


// 10. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'date') in descending order.

let grades_array = [
    { subject: 'maths', grade: 10 },
    { subject: 'spanish', grade: 2 },
    { subject: 'literature', grade: 6 }
]
function arr_sort(grades_array){
    grades_array.sort(function(a,b){
        return b.grade - a.grade
    })
}

arr_sort(grades_array)
console.log(grades_array)



// 11. Array Methods: Given an array of strings, filter out all the strings with a length less than 5 characters.

let array_of_short_strings = ['hello', 'world', 'my', 'name', 'juan lopez', 'long word']

function filtershortstrings(array_of_short_strings){
     let filtered_array = []
    for(let i=0;i<arr_of_strings.length;i++){
        let current_element = array_of_short_strings[i]

        if(current_element.length < 5){
            filtered_array.push(current_element)
        }
    }

    return filtered_array
}

console.log(filtershortstrings(array_of_short_strings))


// 12. Object Iteration: Write a function that counts the number of occurrences of each word in a given string and stores the results in an object.


let sentence = 'She said she would help, but he thought he could do it himself, even though it was clear that that decision would only make things worse.'


let string_to_array = sentence.replaceAll(',','').split(' ')


function word_count(string_to_array){

    let obj = {}

    for(let i=0;i<string_to_array.length;i++){
        string_to_array[i] = string_to_array[i].toLowerCase()

        if(string_to_array[i] in obj){
            let val = obj[string_to_array[i]]
            obj[string_to_array[i]] = val + 1
        }
        else{
            obj[string_to_array[i]] = 1
        }
    }
    return obj
}

console.log(word_count(string_to_array))