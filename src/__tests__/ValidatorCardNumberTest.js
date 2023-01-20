import ValidatorCardNumber from "../components/ValidatorCardNumber";

test.each([
  [1234123412341234, false],
  [4024007162239429, true],
])("check 16-digit cards validation", (number, expected) => {
  expect(ValidatorCardNumber(number)).toEqual(expected);
});
