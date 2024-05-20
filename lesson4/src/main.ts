//Type Aliases

type stringOrNumber = (string | number);

type stringOrNumberArray = stringOrNumber[];

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
};


type userId = stringOrNumber;

// interface PostId = stringOrNumber  error

//Literal Types
let myName: 'Dave'; //Dave type String
// myName = 'John' error John string type but myName execpts Dave type wtf!

let userDame: 'Dave' | 'John' | 'Amy';
userDame = 'Amy'; //Tsc help us show selectable variables

// DRY Don't Repeat Yourself

//Funstions

const add = (a: number, b: number): number => (a + b);


//Burda return olmadigi icin return void olacaktir
const logMsg = (message: any): void => console.log(message);

logMsg('Hello!');
logMsg(add(2, 3));
// logMsg(add('a', 4)); error string can't assiganble to number
logMsg(true);
logMsg([1, 2, 3, 4]);

let subsctract = function (c: number, d: number): number {
    return (c - d);
};

//function thar takes 2 number and return number
type mathFunction = (x: number, y: number) => number;

// interface mathFunction {
//     (a:number, b:number): number
// };


let multiply: mathFunction = function (c, d) { return (c * d) };

let divide: mathFunction = (c, d) => c / d;


logMsg(multiply(2, 3));

logMsg(divide(6, 3));


// type mathAll = (a:number, b:number, c:number) => number

// Optional Parameters          

// Optional parameters should end of the list

const addAll = (a: number, b: number, c?: number): number => {

    if (typeof c !== 'undefined') {
        return a + b + c;
    };
    return a + b;

};


const sumAll = (a: number, b: number, c: number = 2): number => {
    return a + b + c;
}

logMsg(addAll(2, 6)); //c undefined just sum a and b

logMsg(addAll(2, 6, 2));

logMsg(sumAll(2, 6)); //if c not given c takes 2 as value

logMsg(sumAll(2, 6, 2));


//Rest Parameters

const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4, 5, 6));

//rest and optinal paramterss
const total_2 = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total_2(100, 1, 2, 3));



//Never type
const createError = (errMsg: string): never => {
    throw new Error(errMsg);
};

//endlers loop also return never
const infiniteNever = () => {
    let i: number = 1;
    while (true) {
        i++;
    }
}

//now return void
const infiniteVoid = () => {
    let i: number = 1;
    while (true) {
        i++;
        if (i > 100) break
    }
};


//custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' 
        ? true : false;
}


//use of never type
const numberOrString = (value: (string | number)): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'

    return createError('This should not happed dude !');
    
}

//Eger bir sey dondurmezsem bu fonksoyonun undefined de alip hata verebilecegini soyluyor ve string dondurmek de zorunluyum
//Error verecek kod bu error compile time de olacak
//Ama biz bu errorun kendimiz new throw Error olarak yaparsal TSC bu errorlar ilgilendigimizi dusundugunden return yapmadan devam etmemize
// izin verecek

