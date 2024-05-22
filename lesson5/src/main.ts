type One = string;
type Two = string | number;
type Three = "hello";

//conver to more or less specific

let a: One = 'hello';
let b = a as Two; //less specific type => now b can bu number also string
let c = a as Three; //mpre specif type => now c can only string


let d = <One>'helloz';
d = 'e';

const addOrConcat = (a: number, b: number, c: ('add' | 'concat')): (number | string) => {
    if (c === 'add') return a + b;
    return ' ' + a + b;
};


//as assertion ileri sürmek!

let x = addOrConcat(2, 3, 'concat') as string;

//error => addOrConcat returns union of (string | number) buy myVal execepts string
// let myVal: string = addOrConcat(2, 2, 'concat');

//us casting
let myStr: string = addOrConcat(2, 2, 'concat') as string;
let myNum: number = addOrConcat(2, 2, 'add') as number;

//error with assertion you say ts to I know more than here but you don't :)
let val: number = addOrConcat(2, 2, 'concat') as number;

//force casting - double casting
let ten = 10 as unknown as string

let five = (5 as unknown) as string

//not null assertation => img ya HTMLImageElement olacak yada null "!" koyup null olmadigini soyluyoruz TSC'ye
// const img = document.querySelector('img')!

//as normal Assertion
// const myImg = document.getElementById('#img') as HTMLImageElement;

// angle bracket notatiton
// const nextImage = <HTMLImageElement>document.getElementById('#imgNext');

// img.src;
// myImg.src;
// nextImage.src

const yearText = document.getElementById('year') as HTMLSpanElement;
const currYear = new Date().getFullYear().toString();

yearText.setAttribute('datetime', currYear);
yearText.textContent = currYear;







