import Logo from "../components/Logo";
import Input from "../components/UI/Input";
import TipButton from "../components/UI/TipButton";
import Button from "../components/UI/Button";
import { useState } from "react";
import { percentages } from "../data/percentages";
import { validInput } from "../utils/helper";
import useCalculateTip from "../hooks/useCalculateTip";
import "../styles/Pages/Home.css";

const Home = () => {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tipValue, setTipValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [selectedPercentage, setSelectedPercentage] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTipClick = (percentage) => {
    setSelectedPercentage(percentage);
  };

  const handleCustomTip = (e) => {
    const value = e.target.value;
    setCustomTip(value);
  };

  useCalculateTip(
    bill,
    people,
    selectedPercentage,
    customTip,
    setTipValue,
    setTotalValue
  );

  const handleCleanForm = () => {
    setBill("");
    setPeople("");
    setTipValue(0);
    setTotalValue(0);
    setSelectedPercentage(0);
    setCustomTip(0);
  };

  return (
    <div className="app">
      <Logo source={"/logo.svg"} text={"Splitter Logo"} />
      <div className="container">
        <div className="bill-container">
          <div className="input-box">
            <Input
              title={"Bill"}
              type={"text"}
              name={"bill"}
              placeholder={0}
              max={8}
              value={bill}
              onChange={(e) =>
                validInput(
                  e,
                  setBill,
                  setErrorMessage("Bill must have only numbers, ex: 123.45.")
                )
              }
              icon={"/icon-dollar.svg"}
              alt={"Dollar Icon"}
            />
            {errorMessage && (
              <p style={{ color: "red", margin: ".50rem 0 0 0" }}>
                {" "}
                {errorMessage}{" "}
              </p>
            )}
          </div>
          <div className="tip-percentage">
            <p>Select Tip %</p>
            <div className="tipButton-box">
              {percentages.map((percentage) => (
                <div key={percentage.id}>
                  <TipButton
                    type={"text"}
                    text={`${percentage.value}%`}
                    onClick={() => handleTipClick(percentage.value)}
                  />
                </div>
              ))}
              <input
                type="text"
                placeholder="Custom"
                className="tip-input"
                onChange={handleCustomTip}
              />
            </div>
          </div>
          <div className="input-box">
            <Input
              title={"Number of People"}
              type={"text"}
              name={"pplNumber"}
              placeholder={0}
              max={2}
              value={people}
              onChange={(e) =>
                validInput(e, setPeople, setErrorMessage("Can't be zero."))
              }
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
              <span className="value">{`$${tipValue}`}</span>
            </div>
          </div>
          <div className="total tip-box">
            <div className="info">
              <p>Total</p>
              <span>/ person</span>
            </div>
            <div className="value-box">
              <span className="value">{`$${totalValue}`}</span>
            </div>
          </div>
          <div className="button-box">
            <Button type={"button"} text={"reset"} onClick={handleCleanForm} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
