"use strict";
// let a:number=12
// let b:string='6'
// let c:number=2;
//convert to more or less specific 
let a = 'hello';
let b = a; //less specific
let c = a; //more specific
let d = 'World';
let e = 'World';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//Be caeful TS sees no problem but a string is returned
let nextval = addOrConcat(2, 2, 'concat');
//10 as string
10; //forecasting 
//THE DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('nextImg');
img.src;
myImg.src;
