// event capturing
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', function() {
  console.log('Event captured by parent');
}, true);

child.addEventListener('click', function() {
  console.log('Event handled by child');
});

// event bubbling
const parentBubble = document.getElementById('parent');
const childBubble = document.getElementById('child');

child.addEventListener('click', function() {
  console.log('Event handled by child');
});

parent.addEventListener('click', function() {
  console.log('Event captured by parent');
});
