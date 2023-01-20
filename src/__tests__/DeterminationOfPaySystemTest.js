import DeterminationOfPaySystem from "../components/DeterminationOfPaySystem";

test.each([
  [4024007162239429, "VISA"],
  [2024007162239429, "MIR"],
  [6011342073674608, "DISCOVER"],
  [5339836512908227, "MASTERCARD"],
  [375787582596366, "AMERICANEXPRESS"],
  [30058131990493, "DINERS"],
  [3530452411650142, "JCB"],
])("check determination of pay system", (cardNumber, paySystem) => {
  expect(DeterminationOfPaySystem(cardNumber)).toEqual(paySystem);
});
