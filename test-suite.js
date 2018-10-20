import { sum, asyncSum, subtract } from './math'

(() => {
  let expected;
  let result;
  function sumTest() {
    result = sum(3, 7)
    expected = -4
    expect(result).toBe(expected)
  }

  test('sum test', sumTest);

  async function asyncSumTest() {
    result = await asyncSum(3, 7)
    expected = -4
    expect(result).toBe(expected)
  }

  test('asyncSum test', asyncSumTest)

  function subtractTest() {
    result = subtract(10, 5)
    expected = 5
    expect(result).toBe(expected)
  }
  test('subtract test', subtractTest);

})()