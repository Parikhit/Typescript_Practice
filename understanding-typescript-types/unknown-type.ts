// unknown type in TS is a type when type is unknown
// and user haven't added in a type yet
//It is not same as the type any

let userInput: unknown;

userInput = 'Parikhit';
userInput = 3;

// let userName: string;

// userName = userInput;
//This will give error as unknown cannot be assigned to a string. However,

let userTitle: any;
userInput = userTitle; //This can be done.
