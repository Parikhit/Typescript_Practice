// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Parikhit',
//     age: 26,
// };

//Better syntax

const person = {
    name: 'Parikhit',
    age: 26,
    hobbies: ['Sports', 'Coding'], //Arrays (can be extended)
    role: [2, 'author'], // can be a tuple (fixed values and types)
};

//For arrays with only string types
let favouriteActivities: string[];
favouriteActivities = ['Sports', 'Coding'];

//For arrays with any data types
let array: any[];
array = ['Parikhit', 24, true, { hobby: 'coding' }];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby);
}

//Example of Tuples

const val: [number, string] = [2, 'Parikhit'];
console.log(val);

// Example Enums

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const employee = {
    name: 'Parikhit',
    age: 27,
    address: 'India',
    role: Role.ADMIN,
};

console.log(employee.role); //0

//Here ADMIN gets 0
//READ_ONLY gets 1
//AUTHOR gets 2

//Any Type

let skillArray: any[];
skillArray = ['HTML', CSS, 'JS', 'TS', 6];
console.log(skillArray);
