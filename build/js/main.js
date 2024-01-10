"use strict";
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
let mono = [];
//Tuple
let myTuple = ["Dave", 42, true];
let mixed = ["Johne", 1, true];
mixed = myTuple;
console.log(mixed);
console.log(myTuple);
let evh = {
    name: "Anubhav",
    active: false,
    albums: [1983, 5150, "OU812"],
};
let jp = {
    name: "Shrikant",
    albums: [1232, 434, "Ou321"],
};
const greetGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    }
    return `Hello!`;
};
console.log(greetGuitarist(jp));
///Enums :
// "Unlike most Typesript features,Enums are not a type-level
// addition to javascript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
