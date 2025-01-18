// 1. Write a JavaScript class named Rectangle that has two properties, width and height, initialized through its constructor. Then, instantiate an object of Rectangle with a width of 5 and a height of 10.
class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }
    calculateArea(){
      let area = this.width * this.height
      return area
    }
}

let rectangle_object = new Rectangle(5,10)
console.log(rectangle_object)


// 2. How do you create a constructor within a class named Circle that initializes a property radius and sets its value based on the argument passed when a new Circle instance is created? Create an instance of Circle with a radius of 4.

class Circle{
    constructor(radius){
        this.radius = radius
    }
}

let circle_object = new Circle(4)
console.log(circle_object)
// 3. Explain how you would add a method named calculateArea to the Rectangle class that calculates the area of the rectangle. How does this method get added to the prototype of the class, and how can all instances of Rectangle access it?


console.log(rectangle_object.calculateArea())

// 4. In the context of a class method in JavaScript, what does the this keyword refer to, and how would you use it inside a method named describe in a class Person to access the instance's properties named name and age?

class Person{

    constructor(name,age){
        this.name = name
        this.age = age
    }

    describe(){
        console.log('The name of the person is : '+ this.name + ' and the age is : ' + this.age )
    }
}

let person_object = new Person('Phil', 60)
console.log(person_object)
person_object.describe()


// 5. Create a class named Animal with a constructor that initializes a property species. 
// Then, define a subclass named Dog that inherits from Animal and
//  adds an additional property name in its constructor. 
// How do instances of Dog access methods defined on Animal's prototype?


class Animal{
    constructor(species){
        this.species = species
    }
}
class Dog extends Animal{
    constructor(species, breed){
        super(species)
        this.name = breed
    }
}

const pet = new Dog('doggo','bobbo')

console.log(pet)