interface IUser{
    username: string;
    age: number;
    isMarrid: boolean;
}

const userProfile: IUser = {
    username: 'Alaa',
    age: 26,
    isMarrid: false
}

console.log(userProfile)

// Generics

function swap<T>(arg1: T, arg2: T){
    return [arg2, arg1];
}

let num1 = 10;
let num2 = 20;

console.log("Swapped Numbers: ", swap(num1, num2));

// Index Signature

interface ICityDictionary{
    [key: string]: string;
}

const citydictionary: ICityDictionary = {
    'Cairo': 'Egypt',
    'Dobai': 'Emirates',
}

console.log(citydictionary['Cairo']);
console.log(citydictionary['Dobai']);
