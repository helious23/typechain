class Human {
  public name: string;
  public age: number;
  public gender: string;
  // private : 외부에서 변경 및 호출 불가
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const max = new Human("max", 20, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(max));

export {};
