//Union Types are use to accept two different kinds
// of types in a piece of code

//using type aliases
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

const combine = (
    input1: Combinable,
    input2: Combinable,
    resultConversionType: ConversionDescriptor
) => {
    let result;
    if (
        (typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversionType === 'as-number'
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
};

const combineAges = combine(30, 20, 'as-number');
console.log(combineAges);

const combineNames = combine('Parikhit ', 'Baruah', 'as-string');
console.log(combineNames);
