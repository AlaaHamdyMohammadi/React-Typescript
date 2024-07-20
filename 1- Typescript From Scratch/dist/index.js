"use strict";
const userProfile = {
    username: 'Alaa',
    age: 26,
    isMarrid: false
};
console.log(userProfile);
// Generics
function swap(arg1, arg2) {
    return [arg2, arg1];
}
let num1 = 10;
let num2 = 20;
console.log("Swapped Numbers: ", swap(num1, num2));
const citydictionary = {
    'Cairo': 'Egypt',
    'Dobai': 'Emirates',
};
console.log(citydictionary['Cairo']);
console.log(citydictionary['Dobai']);
