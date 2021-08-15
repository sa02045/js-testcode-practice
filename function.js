const add = (a, b) => a + b;

const sumLater = (a, b) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(a + b);
    }, 2000);
  });
};

module.exports = {
  add,
  sumLater,
};
