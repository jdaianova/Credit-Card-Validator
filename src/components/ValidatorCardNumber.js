function ValidatorCardNumber(number) {
  let checkSum = 0;
  String(number)
    .split("")
    .filter((digit, index) => {
      if ((index + 1) % 2 != 0) {
        digit = digit * 2;
        if (digit >= 10) {
          digit = digit - 9;
        }
      }
      checkSum = checkSum + Number(digit);
    });

  return checkSum % 10 === 0 ? true : false;
}

export default ValidatorCardNumber;
