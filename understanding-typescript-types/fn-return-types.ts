//Adding return types to function

const add = (n1: number, n2: number): number => n1 + n2;

console.log(add(20, 20));

//If a fn doesnot return anything it will give return type void

const printResult = (num1: number, num2: number) => console.log(num1 + num2);

