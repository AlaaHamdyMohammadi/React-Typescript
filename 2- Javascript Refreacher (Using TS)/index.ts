const numbers: number[] = [1, 2, 3, 4, 5];

const sum: number = numbers.reduce((prevValue: number, currValue: number) => prevValue + currValue, 0);

console.log(sum); 