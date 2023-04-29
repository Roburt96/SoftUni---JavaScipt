class Cat {
    constructor(name, age) {     // създаваме обект
      this.name = name;         
      this.age = age;
    }
  
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  
  function createCats(cats) {
    const catObjects = [];   // пазим котките като обект
  
    for (const cat of cats) {
      const [name, age] = cat.split(" ");
      const catObj = new Cat(name, age);
      catObjects.push(catObj);
    }
  
    for (const catObj of catObjects) {
      catObj.meow();
    }
  }

createCats(['Candy 1', 'Poppy 3', 'Nyx 2'])