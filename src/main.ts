// let a:number=12
// let b:string='6'
// let c:number=2;

// console.log(b);
// console.log(c+b);
//data typed in typescript
// let myName:string;
// let meaningOfLife:number;
// let isLoading:boolean;
// let album:any;//any type
// let cm:string | number;//union type
// cm='fdsfsd';
// cm=12

// album='1323';
// album=1231
// album=true
// myName='NAme';
// myName='jhone';
// meaningOfLife=21
// isLoading=true
// console.log(myName);
// const sum=(a:number,b:string)=>{
//     return a+b;
// }
// console.log(sum(12,'ddad'));

// let re:RegExp=/\w+/g //RegExp type in typescript
//:TODO: checklison-3
let stringArr = ["name", "hey", "ru"];
let guitars = ["Strat", "Les paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "amfd";
stringArr.push("sfs");
mixedData[0] = "abstr";
//add ing data in array
let test = [];
let mono: string[] = [];

//Tuple
let myTuple: [string, number, boolean] = ["Dave", 42, true];
let mixed = ["Johne", 1, true];
mixed = myTuple;
console.log(mixed);
console.log(myTuple);
//Object declearion
type Ritik = {
  name: string;
  album: (string | number)[];
};
interface Guitarist {
  name?: string;
  active?: boolean;
  albums: (string | number)[];
}
let evh: Guitarist = {
  name: "Anubhav",
  active: false,
  albums: [1983, 5150, "OU812"],
};
let jp: Guitarist = {
  name: "Shrikant",
  albums: [1232, 434, "Ou321"],
};
const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name?.toUpperCase()}!`;
  }
  return `Hello!`;
};
console.log(greetGuitarist(jp));
///Enums :
// "Unlike most Typesript features,Enums are not a type-level
// addition to javascript but something added to the language and runtime."

enum Grade{
      U=1,
      D,
      C,
      B,
      A,
}
console.log(Grade.A)