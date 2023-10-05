import { useEffect } from "react";
import { calculate } from "../utils/helper";

const useCalculateTip = (
  bill,
  people,
  selectedPercentage,
  customTip,
  tipMode,
  setTipValue,
  setTotalValue
) => {
  useEffect(() => {
    const billAmount = parseFloat(bill);
    const numberOfPeople = parseFloat(people);
    let tipValue = 0;

    if (!isNaN(billAmount) && !isNaN(numberOfPeople) && numberOfPeople > 0) {
      if (tipMode === "percentage" && selectedPercentage > 0) {
        tipValue = selectedPercentage;
      } else if (tipMode === "custom" && customTip > 0) {
        tipValue = customTip;
      }

      calculate(
        billAmount,
        numberOfPeople,
        tipValue,
        setTipValue,
        setTotalValue
      );
    }
  }, [
    bill,
    people,
    selectedPercentage,
    customTip,
    tipMode,
    setTotalValue,
    setTipValue,
  ]);
};

export default useCalculateTip;
