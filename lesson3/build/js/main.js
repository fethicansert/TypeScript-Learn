"use strict";
let stringArr = ['one', 'two', 'tree'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EHV', 1984, true];
stringArr[0] = 'four';
// stringArr[0] = 4; error type number not assiganble to type string
stringArr.push('five');
// stringArr.push(12); error type number not assiganble to type string
guitars[0] = '1000';
guitars[0] = 'Guitar Brand';
// guitars[0] = false;  we can just use string or number
guitars.unshift("Jim");
// stringArr = guitars  error stringArr type String
guitars = stringArr; // OK beacuse guitar can be string | or number
mixedData = guitars;
mixedData = stringArr;
let test = [];
let bands = [];
bands.push('Hallen');
// Not: multiple types union type = (string | boolean | number)[]
//Tuple
const isTeen = false;
let myTuple = ['name', 25, isTeen]; //I have to insert items in given type order;
// myTuple[2] = 12  index 2 accept boolean
myTuple[0] = 'newName';
myTuple[2] = false; // OK
let mixed = ['purple', 24501, false, 12];
mixed = myTuple; //firt tree item match type than no error
// myTuple = mixed   error beacuse mixed can have more than tree element
mixed[3] = 12; // OK
let myTuple2 = [true, false, ['name']]; //ex for me;
// console.log(typeof myTuple2); // object
//Objects
let myObject;
myObject = []; //arrays also object in vanilla js
// console.log(typeof myObject); //object
const exampleObj = {
    prop1: 'Fethi Can',
    prop2: true
};
exampleObj.prop1 = 'Yusuf Can';
exampleObj.prop2 = false;
;
let evh = {
    name: 'Edie',
    active: true,
    albums: [1980, 'Album Name', 1984, 'OU112']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: [1980, 'Album Name', 2001, 'JJ112']
};
//Optional Props
let hk = {
    name: "Ali KRDMR",
    albums: ['Warwick', 'Rammus']
};
hk.years = [2000, 2001, 2006];
// jp = evh;
//This was tried before years props optinal
// evh.years = 12; error => years deos not exist on Guitarist type
let guitaristArray = [];
guitaristArray.push(evh);
guitaristArray.push(jp);
//Functions
const greetGuatirist = (guiatirst) => {
    var _a;
    return `Hello ${(_a = guiatirst.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
};
//if we don't use ? optional gives error => guitarist.name is posibaliy undefined
//beacuse undefined.toUpperCase() run time error we don't want this;
const greetGuatirist_Narrowing = (guiatirst) => {
    var _a;
    if (guiatirst.name)
        return `Hello ${(_a = guiatirst.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    return 'Hello!';
};
console.log(greetGuatirist(hk));
let hp = {
    active: false,
    albums: ['100AB']
};
console.log(greetGuatirist_Narrowing(hp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
;
console.log(Grade.A);
