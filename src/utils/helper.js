export const validInput = (e, setState) => {
  const value = e.target.value;

  const numericValue = value.replace(/[^0-9.]/g, "");

  // if (value !== numericValue || value <= 0) {

  // } else {
  //   setState(value);
  // }
};

export const calculate = (
  billValue,
  peopleNumber,
  tipValue,
  setBillValue,
  setTipValue
) => {
  const total = billValue / peopleNumber;
  const tipAmount = (total * tipValue) / 100;
  const totalAmount = total + tipAmount;

  setBillValue(totalAmount.toFixed(2));
  setTipValue(tipAmount.toFixed(2));
};
