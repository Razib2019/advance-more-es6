// Animal
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

// Dog
class Dog extends Animal {
  constructor(name, breed, age) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

// Cat
class Cat extends Animal {
  constructor(name, color, age) {
    super(name, age);
    this.color = color;
  }

  meow() {
    console.log(`${this.name} is meowing`);
  }
}

// Bird
class Bird extends Animal {
  constructor(name, species, age) {
    super(name, age);
    this.species = species;
  }
  fly() {
    console.log(`${this.name} is flying`);
  }
}

const dog1 = new Dog("German", "Deshi", 7);
console.log(dog1);
dog1.eat();

const cat1 = new Cat("Tommy", "White", 5);
console.log(cat1);
cat1.eat();

const bird1 = new Bird("Kokil", "Deshi", 2);
console.log(bird1);
