function DeterminationOfPaySystem(cardNumber) {
  const paySystems = {
    MIR: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    VISA: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    DISCOVER: [60],
    MASTERCARD: [51, 52, 53, 54, 55],
    AMERICANEXPRESS: [34, 37],
    DINERS: [30, 36, 38],
    JCB: [31, 35],
  };

  const idNumber = Number(String(cardNumber).slice(0, 2));
  let resultPaySystem = "";

  for (let key in paySystems) {
    if (paySystems[key].includes(idNumber)) {
      resultPaySystem = key;
    }
  }

  return resultPaySystem;
}

export default DeterminationOfPaySystem;
