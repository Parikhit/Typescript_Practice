const add = (n1: number, n2: number) => n1 + n2;

console.log(add(20, 100));

//Adding function types

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(10, 10));

//Function Types Callbacks

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
    const result = n1 + n2;
    cb(result);
};

addAndHandle(10, 60, (result) => console.log(result));
