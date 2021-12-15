
// const Person = function () {

// }

// const shaggy = new Person();
// console.log('shaggy', shaggy);





//using this!!
// const Person = function () {
//     //console.log('this', this);
//     this.name = 'Shaggy Rogers';
// }

// const shaggy = new Person();
// console.log('shaggy', shaggy.name);






//more using this
// const Person = function (name) {
//     //console.log('this', this);
//     this.name = name;
// }

// const shaggy = new Person('Shaggy Rogers');
// console.log('shaggy:', shaggy.name);







// adding a functions to it  - Hi my name is
// const Person = function (name) {
//     //console.log('this', this);
//     this.name = name;

//     this.greet = function (){
//         console.log(`Hi! My name is ${ this.name }`);
//     }
// }

// const shaggy = new Person('Shaggy Rogers');
// shaggy.greet();

// const velma = new Person('Velma Dinkley');
// velma.greet();







// adding the console.log
// const Person = function (name) {
//     //console.log('this', this);
//     this.name = name;

//     this.greet = function (){
//         console.log(`Hi! My name is ${ this.name }`);
//     }
// }

// const shaggy = new Person('Shaggy Rogers');
// shaggy.greet();

// const velma = new Person('Velma Dinkley');
// velma.greet();

// console.log('shaggy:', shaggy);
// console.log('velma:', velma);






// person outside {}
// const Person = function (name) {
//     //console.log('this', this);
//     this.name = name;
// }

// Person.prototype.greet = function (){
//     console.log(`Hi! My name is ${ this.name }`);
// }

// const shaggy = new Person('Shaggy Rogers');
// shaggy.greet();

// const velma = new Person('Velma Dinkley');
// velma.greet();

// console.log('shaggy:', shaggy);
// console.log('velma:', velma);








//log out the prototype - another option 


//between 117 and 124 should be able to run the exercise for the first part
// const Person = function (name) {
//     this.name = name;
// }

// Person.prototype.greet = function (){
//     console.log(`Hi! My name is ${ this.name }`);
// }



// const shaggy = new Person('Shaggy Rogers');
// shaggy.greet();

// const velma = new Person('Velma Dinkley');
// velma.greet();

// console.log('shaggy prototype:', Object.getPrototypeOf(shaggy));
// console.log('velma prototype:', Object.getPrototypeOf(velma));








// Assign a pet property in the Person constructor via a parameter
// Add a feedPet method to Person.prototype which:
// Accepts a food parameter
// Outputs a string containing the person and pet's names and the food. For example: 'Shaggy Rogers fed Scooby Doo a Scooby Snack'
// Invokes the pet's eat method and passes the food to it


const Person = function (name, pet) {
    this.name = name;
    this.pet = pet;
}

Person.prototype.greet = function (){
    console.log(`Hi! My name is ${ this.name }`);
}

Person.prototype.feedPet = function (food){
    console.log(`${this.name } fed ${ this.pet.name } a ${ food }`);
    this.pet.eat(food)
}

// const scooby = new Person('Scooby Doo', 'Dog');
// scooby.eat('Scooby Snack');


module.exports = Person;


