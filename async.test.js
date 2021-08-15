const { sumLater } = require("./function");

test("1+3의 2초후 합한 계산값은 4", () => {
  return sumLater(1, 3).then((sum) => {
    expect(sum).toBe(4);
  });
});

test("1+3의 2초후 합한 계산값은 4", () => {
  return expect(sumLater(1, 3)).resolves.toBe(4);
});

test("1+3의 2초후 합한 계산값은 4", async () => {
  const result = await sumLater(1, 3);
  expect(result).toBe(4);
});
