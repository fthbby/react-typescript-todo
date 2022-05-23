let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role:[number, string];

let printName: (name: string) => never;
// void returns undefined
// never returns nothing


// interface extend
interface Person {
  name: string;
  age?: number;
// ? makes it optional
}

interface Guy extends Person {
  profession: string;
}

let guy:Guy = {
  name: 'Brian',
  profession: 'a guy',
}

// extends with type
type X = {
  a:string;
  b:number;
}

type Y =X & {
  c:string;
  d:number;
}

let y:Y = {
  a: 'hi',
  b: 2,
  c: 'efs',
  d: 42
}

let person: Person = {
  name: 'Nat',
  age: 28
}

let lotsOfPeople: Person[]


let personName: unknown;


function Practice() {
    return (
      <div>
      Hello
      </div>
    );
  }
  
  export default Practice;
  