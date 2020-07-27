const duplicate = function () {
  return this.concat(this);
};

Array.prototype.duplicate = duplicate;

const result = [1, 2, 3, 4].duplicate();

console.log(result);
