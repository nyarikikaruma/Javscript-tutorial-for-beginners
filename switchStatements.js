let value = 0;

var text = 'No Value';

switch(value) {
    case 0:
        text = 'Off';
        break;
    case 1:
        text = 'On';
        break;
    default:
        text = 'Undefined value';
}

console.log('Our bulb is: ' + text);