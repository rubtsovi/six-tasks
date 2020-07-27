let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const removeEven = (array) => {
  array.forEach((v, i) => {
    if (v % 2 === 0) {
      array.splice(i, 1);
    }
  });
};

removeEven(array);

console.log(array);
