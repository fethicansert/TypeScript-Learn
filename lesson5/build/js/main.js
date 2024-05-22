"use strict";
//conver to more or less specific
let a = 'hello';
let b = a; //less specific type => now b can bu number also string
let c = a; //mpre specif type => now c can only string
let d = 'helloz';
d = 'e';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return ' ' + a + b;
};
//as assertion ileri sürmek!
let x = addOrConcat(2, 3, 'concat');
//error => addOrConcat returns union of (string | number) buy myVal execepts string
// let myVal: string = addOrConcat(2, 2, 'concat');
//us casting
let myStr = addOrConcat(2, 2, 'concat');
let myNum = addOrConcat(2, 2, 'add');
//error with assertion you say ts to I know more than here but you don't :)
let val = addOrConcat(2, 2, 'concat');
//force casting - double casting
let ten = 10;
let five = 5;
//not null assertation => img ya HTMLImageElement olacak yada null "!" koyup null olmadigini soyluyoruz TSC'ye
// const img = document.querySelector('img')!
//as normal Assertion
// const myImg = document.getElementById('#img') as HTMLImageElement;
// angle bracket notatiton
// const nextImage = <HTMLImageElement>document.getElementById('#imgNext');
// img.src;
// myImg.src;
// nextImage.src
const yearText = document.getElementById('year');
const currYear = new Date().getFullYear().toString();
yearText.setAttribute('datetime', currYear);
yearText.textContent = currYear;
