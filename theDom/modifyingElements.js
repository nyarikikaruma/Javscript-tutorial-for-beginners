//modifying the text content
const element = document.getElementById('sub');
console.log(element);
element.textContent = 'You will never regret joining us!';

const textContent = element.textContent;
console.log(textContent); 

//modifying attributes
const imageElement = document.getElementById('image');

imageElement.setAttribute('src', 'nodes.png');

const newImage = imageElement.getAttribute('src');
console.log(newImage);

//modifying styles
const TestElement = document.getElementById('test');

// Set the background color of the element
TestElement.style.backgroundColor = 'red';

// Get the font size of the element
const fontSize = TestElement.style.fontSize;
console.log(fontSize); // Output: 16px

