const element = document.getElementById('date')
element.addEventListener('click', displayDate)
element.addEventListener('mouseover', changeBackground)
element.addEventListener('mouseleave', mouseLeft)

function displayDate() {
    const demoElement = document.getElementById('demo');
    demoElement.innerHTML = Date()
    console.log('I was clicked.');
}

function changeBackground() {
element.style.backgroundColor = 'red';
    console.log('Mouse moved over me');
}

function mouseLeft() {
    element.style.backgroundColor = 'green';
        console.log('Mouse left me me');
    }
