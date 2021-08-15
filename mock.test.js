// jest.fn()으로 mock함수를 생성
const mockFn = jest.fn();

function forEachAdd1(arr) {
  arr.forEach((num) => {
    mockFn((num = 1));
  });
}
// mock이라는 프러퍼티 안에 calls가 있음
// mockFn()으로 호출된 정보, 인수들이 담겨있음
test("함수는 2번 호출됨", () => {
  expect(mockFn.mock.calls.length).toBe(2);
});
