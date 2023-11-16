//creating elemets
const element = document.createElement('p');

console.log(element);

//using the innerhtml to overwrite other elements
const innerElement = document.getElementById('test');
innerElement.innerHTML = '<p>Hello, world!</p>';