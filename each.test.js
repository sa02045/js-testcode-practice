const { add } = require("./function.js");

let sum = 0;

// 테스트 전 수행할 작업
beforeEach(() => {
  sum = 0;
});

// 테스트 후 수행할 작업
// afterEach(() => {
//   sum = 1;
// });

test("0+1=1", () => {
  sum = add(sum, 1);
  expect(sum).toBe(1);
});

test("0+2=2", () => {
  sum = add(sum, 2);
  expect(sum).toBe(2);
});

test("0+3=3", () => {
  sum = add(sum, 3);
  expect(sum).toBe(3);
});
