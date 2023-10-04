import { useEffect } from "react";
import { calculate } from "../utils/helper";

const useCalculateTip = (
  bill,
  people,
  selectedPercentage,
  customTip,
  setTipValue,
  setTotalValue
) => {
  useEffect(() => {
    const billAmount = parseFloat(bill);
    const numberOfPeople = parseFloat(people);
    const customTipValue = parseFloat(customTip);

    if (!isNaN(billAmount) && !isNaN(numberOfPeople) && numberOfPeople > 0) {
      if (customTip) {
        calculate(
          billAmount,
          numberOfPeople,
          customTipValue,
          setTotalValue,
          setTipValue
        );
      } else {
        calculate(
          billAmount,
          numberOfPeople,
          selectedPercentage,
          setTotalValue,
          setTipValue
        );
      }
    }
  }, [bill, people, selectedPercentage, customTip, setTotalValue, setTipValue]);
};

export default useCalculateTip;
