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
// let stringArr = ["name", "hey", "ru"];
// let guitars = ["Strat", "Les paul", 5150];
// let mixedData = ["EVH", 1984, true];
// stringArr[0] = "amfd";
// stringArr.push("sfs");
// mixedData[0] = "abstr";
// //add ing data in array
// let test = [];
// let mono: string[] = [];

// //Tuple
// let myTuple: [string, number, boolean] = ["Dave", 42, true];
// let mixed = ["Johne", 1, true];
// mixed = myTuple;
// console.log(mixed);
// console.log(myTuple);
// //Object declearion
// type Ritik = {
//   name: string;
//   album: (string | number)[];
// };
// interface Guitarist {
//   name?: string;
//   active?: boolean;
//   albums: (string | number)[];
// }
// let evh: Guitarist = {
//   name: "Anubhav",
//   active: false,
//   albums: [1983, 5150, "OU812"],
// };
// let jp: Guitarist = {
//   name: "Shrikant",
//   albums: [1232, 434, "Ou321"],
// };
// const greetGuitarist = (guitarist: Guitarist) => {
//   if (guitarist.name) {
//     return `Hello ${guitarist.name?.toUpperCase()}!`;
//   }
//   return `Hello!`;
// };
// console.log(greetGuitarist(jp));
// ///Enums :
// // "Unlike most Typesript features,Enums are not a type-level
// // addition to javascript but something added to the language and runtime."

// enum Grade{
//       U=1,
//       D,
//       C,
//       B,
//       A,
// }
// console.log(Grade.A)
///
// FOR LEARNING FUNCTION BEHAVIOUR IN TYPESCRIPT:
//Type allias for typescript type
// type stringorNumber = string | number;
// type stringorNumberArray = (string | number)[];

// type Guitarist = {
//   name?: string;
//   active: boolean;
//   albums: stringorNumberArray;
// };
// type UserId = stringorNumber;
// //Literal Types
// let myName: "Dave";
// let username: "Dave" | "Johne" | "Amy";
// username = "Amy";
// //functions
// const add = (a: number, b: number): number => {
//   return a + b;
// };
// const logMesg = (message: any): void => {
//   console.log(message);
// };
// logMesg("Helo");
// logMesg(add(2, 4));
// let subtract = function (c: number, d: number): number {
//   return c - d;
// };
// //type mathFunction =(a: number , b:number)=>number
// interface mathFunction {(a: number , b:number):number}
// let multiply:mathFunction=function(c,d){
//          return c*d
// }
// logMesg(multiply(2,5));
//  // OPTIONAL PARAMETERS FOR TYPESCRIPT:
       
//  const addAll=(a:number,b:number, c?:number):number=>{
//         if(typeof c!=='undefined'){
//                return a+b+c
//         }
//         return a+b
//  }
//  //default parameters
//  const sumAll=(a:number,b:number, c:number=2):number=>{
        
//         return a+b+c
//  }
//  logMesg(sumAll(2,4,9))
//  //REST PARAMETERS
//  const total=(...nums:number[]):number=>{
//         return nums.reduce((prev,curr)=>prev+curr)
//  }
// logMesg(total(1,3,4,6))
// //NEVER TYPE
// const createError=(errMsg:string)=>{
//          throw new Error(errMsg)
// }
// const inifinite=()=>{
//          let i:number=1
//          while(true){
//                i++
//                if(1>100)break
//          }
// }
// //custom function gaurd function
// const isNumber =(value:any):boolean=>{
//          return typeof value === 'number'
//          ?true :false
// }
// //use of never type
// const numberORstring=(value:number | string):string =>{
//          if(typeof value==='string') return 'string'
//          if(typeof value==='number') return 'number'
//          return createError('This should never happen !')
// }
type One=string
type Tw=string | number
type Three='hello'

//convert to more or less specific 
let a:One='hello'
let b=a as Tw //less specific
let c=a as Three //more specific
let d=<One>'World'
let e=< string | number>'World'
const addOrConcat=(a:number, b:number, c:'add'|'concat'):number |string =>{
          if (c==='add') return a+b
          return '' +a + b
}
let myVal:string =addOrConcat(2,2,'concat') as string

//Be caeful TS sees no problem but a string is returned

let nextval:number =addOrConcat(2,2,'concat') as number

//10 as string
(10 as unknown) as string //forecasting 
//THE DOM
const img=document.querySelector('img')!
const myImg=document.getElementById('#img') as HTMLImageElement
const nextImg=<HTMLImageElement> document.getElementById('nextImg') as HTMLImageElement
img.src
myImg.src
