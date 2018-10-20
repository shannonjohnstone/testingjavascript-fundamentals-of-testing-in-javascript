import { test, expect } from './assertion-library'
import { sum, subtract } from './math'

(() => {
  let expected;
  let result;
  function sumTest() {
    result = sum(3, 7)
    expected = -4
    expect(result).toBe(expected)
  }

  test('sum test', sumTest);

  function subtractTest() {
    result = subtract(10, 5)
    expected = 5
    expect(result).toBe(expected)
  }
  test('subtract test', subtractTest);

})()