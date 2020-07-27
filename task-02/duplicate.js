const duplicate = function () {
  const newArray = new Array(...this);
  newArray.push(...this);
  return newArray;
};

Array.prototype.duplicate = duplicate;

const result = [1, 2, 3, 4].duplicate();

console.log(result);
