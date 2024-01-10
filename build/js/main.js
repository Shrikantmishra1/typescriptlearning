"use strict";
// let a:number=12
// let b:string='6'
// let c:number=2;
//Literal Types
let myName;
let username;
username = "Amy";
//functions
const add = (a, b) => {
    return a + b;
};
const logMesg = (message) => {
    console.log(message);
};
logMesg("Helo");
logMesg(add(2, 4));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMesg(multiply(2, 5));
// OPTIONAL PARAMETERS FOR TYPESCRIPT:
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default parameters
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMesg(sumAll(2, 4, 9));
//REST PARAMETERS
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMesg(total(1, 3, 4, 6));
//NEVER TYPE
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const inifinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (1 > 100)
            break;
    }
};
//custom function gaurd function
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
//use of never type
const numberORstring = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('This should never happen !');
};
