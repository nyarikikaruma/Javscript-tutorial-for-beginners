const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((element, index) => {
  return `Number ${element}: Index ${index}\n`;
});

newArr.forEach((item) => {
    console.log(item)
})