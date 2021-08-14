const add = require("./add.js");

let sum = 0;

//  각 테스트 마다 sum을 0을 만든다
//  이 코드가 없으면 sum에 누적해서 값이 더해짐
beforeEach(() => {
  sum = 0;
});

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
