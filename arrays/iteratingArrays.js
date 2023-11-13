const myLanguages =  ['PHP', 'JavaScript', 'Java', 'Ruby', 'Python', 'Pascal', 'Kotlin', 'Visual Basic', 'C#', 'C++', 'C']

// for loop
for(i = 0; i<myLanguages.length; i++) {
    console.log(`${myLanguages[i]} is index: ${i}`);
}

// forEach
myLanguages.forEach((item) => {
    console.log(`${item}`)
})

// every()
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 4;
}

console.log(allOver18);
// map()
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((element, index) => {
  return `Number ${element}: Index ${index}\n`;
});

newArr.forEach((item) => {
    console.log(item)
})

// filter()
const newNumbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);

// reduce()
const reducedNumbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
    console.log(`Current value is: ${total}`);
  return total + value;
}
console.log(sum);

// indexOf()
let indexOfPHP =  myLanguages.indexOf('PHP');
console.log(indexOfPHP);
