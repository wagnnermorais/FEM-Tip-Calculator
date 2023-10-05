export const validInput = (e, setState, fieldName) => {
  const value = e.target.value;
  const errors = {};

  if (value === "") {
    errors[fieldName] = "Value can't be empty";
    setState("");
  } else {
    const numericValue = value.replace(/[^0-9.]/g, "");

    if (numericValue <= 0) {
      errors[fieldName] = "Can't be zero";
      setState("");
    } else if (value !== numericValue) {
      errors[fieldName] = "Only numbers, ex: 1234.5";
    } else {
      setState(value);
    }
  }

  return errors[fieldName] || null;
};

export const calculate = (
  bill,
  people,
  tipPercentage,
  tipValueFunction,
  totalValueFunction
) => {
  const total = bill / people;
  const tipAmount = (total * tipPercentage) / 100;
  const totalAmount = total + tipAmount;

  tipValueFunction(tipAmount.toFixed(2));
  totalValueFunction(totalAmount.toFixed(2));
};
