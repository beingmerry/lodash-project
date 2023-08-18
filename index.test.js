const _ = require('./index.js')

describe('_.chunk method', () => {
  test('chunks an array of 6 values into 3 chunks of size 2', () => {
    const array = [1, 2, 3, 4, 5, 6]
    const size = 2
    const expected = [
      [1, 2],
      [3, 4],
      [5, 6]
    ]
    expect(_.chunk(array, size)).toEqual(expected)
  })

  test('chunks an array of 3 values into 3 chunks of size 1 when size parameter is not provided', () => {
    const array = [1, 2, 3]
    const expected = [[1], [2], [3]]
    expect(_.chunk(array)).toEqual(expected)
  })

  test('returns the entire array as a single chunk when the size parameter is larger than the array length', () => {
    const array = [1, 2, 3]
    const size = 5
    const expected = [[1, 2, 3]]
    expect(_.chunk(array, size)).toEqual(expected)
  })
})

describe('_.compact method', () => {
    test('removes all falsy values from the array', () => {
      const array = [0, 1, false, 2, '', 3];
      const expected = [1, 2, 3];
      expect(_.compact(array)).toEqual(expected);
    });
  
    test('returns an empty array when all values are falsy', () => {
      const array = [0, false, '', null, undefined];
      const expected = [];
      expect(_.compact(array)).toEqual(expected);
    });
  });