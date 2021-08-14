module.exports = sumLater = (a, b) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(a + b);
    }, 2000);
  });
};
