var userProfile = {
    username: 'Alaa',
    age: 26,
    isMarrid: false
};
console.log(userProfile);
// Generics
function swap(arg1, arg2) {
    return [arg2, arg1];
}
var num1 = 10;
var num2 = 20;
console.log("Swapped Numbers: ", swap(num1, num2));
