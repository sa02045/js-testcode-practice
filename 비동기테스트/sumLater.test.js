const sumLater = require("./sumLater.js");

test("1+3의 2초후 합한 계산값은 4", () => {
  return sumLater(1, 3).then((sum) => {
    expect(sum).toBe(4);
  });
});
