const convert = require('../dist/js-php-data')

test('converts `[]` to `[]`', () => {
  expect(convert([])).toBe(`[]`)
})

test("converts `[ 'a', 'b', 3 ]` correctly`", () => {
  expect(convert(['a', 'b', 3])).toBe(`['a', 'b', 3]`)
})
