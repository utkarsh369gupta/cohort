
class Animal {
  constructor(name, legCount, speak) {
    this.name = name
    this.legCount = legCount
    this.speak = speak
  }
  static type(){
    console.log("animal");
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

let dog = new Animal("tommy", 4, "bhow bhow");
// console.log(dog.name);


Animal.type();
// dog.type(); // this will give an error.

let val = dog.describe();
console.log(val);