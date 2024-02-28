const add2 = (a, b, c) => {
  return a + b + c;
};

const result2 = add(1, 2, 3); // add(1)(2)(3)
console.log(result2);

const add = (a) => {
  return (b) => {
    return (c) => {
      return a * (b + c);
    };
  };
};
const level = add(1);
const result = level(2)(3)
console.log(result);
