class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    get name(){
        return this._name
    }

    set name(val){
        this._name = val
    }

    get_age(){
        return this.age
    }

    set_age(age){
            if(age < 0){
                throw new Error("Age can't be negative")  
            }
            else{
                this.age = age
            }
       
    }
}

class Student extends Person{
    constructor(name,age,student_id){
        super(name, age)
        this.student_id = student_id
    }

    static greet(){
        console.log("Hi there!")
    }
}

let p1 = new Person('mike', 19)

console.log(p1)

p1.name = 'bob'
p1.age = 10

console.log(p1)

let s1 = new Student('david', 20, 4455)

console.log(s1)

Student.greet()

try{
    s1.set_age(-1)
}
catch(e){
    console.log(e)
}
console.log(s1)

