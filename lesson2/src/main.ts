let username: string;
let meaningOfLife: number;
let isLoading: boolean;
let album: any;
let marketList: string | number;  //Union type


username = 'fethi';
meaningOfLife = 25;

marketList = 'list';
marketList = 100;


const sum = (a: number, b: string) => {
    return a + b;
}

let postId: string | number;
let isActive: number | boolean | string;
isActive = 12;
isActive = false;
isActive = 'active';

let re: RegExp = /\w+/g;