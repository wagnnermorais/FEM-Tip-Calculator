import "../styles/Pages/Home.css";
import Input from "../components/UI/Input";
import TipButton from "../components/UI/TipButton";
import Button from "../components/UI/Button";
import { percentages } from "../data/percentages";
import { useState, useEffect } from "react";

const Home = () => {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tipValue, setTipValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [selectedPercentage, setSelectedPercentage] = useState(0);

  const handleBill = (value) => {
    setBill(value);
  };

  const handlePeople = (value) => {
    setPeople(value);
  };

  const handleTipClick = (percentage) => {
    setSelectedPercentage(percentage);
  };

  useEffect(() => {
    const billAmount = parseFloat(bill);
    const numberOfPeople = parseFloat(people);

    if (!isNaN(billAmount) && !isNaN(numberOfPeople) && numberOfPeople > 0) {
      const total = billAmount / numberOfPeople;
      const tipAmount = (total * selectedPercentage) / 100;
      const totalAmount = total + tipAmount;

      setTotalValue(totalAmount.toFixed(2));
      setTipValue(tipAmount.toFixed(2));
    } else {
      setTipValue(0);
      setTotalValue(0);
    }
  }, [bill, people, selectedPercentage]);

  return (
    <div>
      <div>
        <p className="home-main-title">SPLI</p>
        <p className="home-main-title">TTER</p>
      </div>
      <div className="container">
        <div className="bill-container">
          <div className="input-box">
            <Input
              title={"Bill"}
              type={"text"}
              name={"bill"}
              placeholder={0}
              max={8}
              handler={handleBill}
              icon={"/icon-dollar.svg"}
              alt={"Dollar Icon"}
            />
          </div>
          <div className="tip-percentage">
            <p>Select Tip %</p>
            <div className="tipButton-box">
              {percentages.map((percentage) => (
                <div className="tip" key={percentage.id}>
                  <TipButton
                    type={"text"}
                    text={`${percentage.value}%`}
                    onClick={() => handleTipClick(percentage.value)}
                  />
                </div>
              ))}
              <input type="text" placeholder="Custom" className="tip-input" />
            </div>
          </div>
          <div className="input-box">
            <Input
              title={"Number of People"}
              type={"text"}
              name={"pplNumber"}
              placeholder={0}
              max={2}
              handler={handlePeople}
              icon={"/icon-person.svg"}
              alt={"Dollar Icon"}
            />
          </div>
        </div>
        <div className="tip-container">
          <div className="tip-amount tip-box">
            <div className="info">
              <p>Tip Amount</p>
              <span>/ person</span>
            </div>
            <div className="value-box">
              <span className="value">{tipValue}</span>
            </div>
          </div>
          <div className="total tip-box">
            <div className="info">
              <p>Total</p>
              <span>/ person</span>
            </div>
            <div className="value-box">
              <span className="value">{totalValue}</span>
              {/* <input type="text" value={totalValue} onChange={calc} /> */}
            </div>
          </div>
          <div className="button-box">
            <Button type={"button"} action={"lorem"} text={"reset"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
