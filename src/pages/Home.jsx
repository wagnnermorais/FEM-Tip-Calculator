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
  const [tipValue, setTipValue] = useState("0.00");
  const [totalValue, setTotalValue] = useState("0.00");
  const [selectedPercentage, setSelectedPercentage] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const [tipMode, setTipMode] = useState("");
  const [errors, setErrors] = useState({});

  const handleBillChange = (e) => {
    const error = validInput(e, setBill, "bill");
    setErrors({ ...errors, bill: error });
  };

  const handlePeopleChange = (e) => {
    const error = validInput(e, setPeople, "people");
    setErrors({ ...errors, people: error });
  };

  const handleTipClick = (percentage) => {
    setTipMode("percentage");
    setSelectedPercentage(percentage);
  };

  const handleCustomTip = (e) => {
    setTipMode("custom");
    const value = e.target.value;
    setCustomTip(value || null);
  };

  useCalculateTip(
    bill,
    people,
    selectedPercentage,
    customTip,
    tipMode,
    setTipValue,
    setTotalValue
  );

  const handleCleanForm = () => {
    setBill("");
    setPeople("");
    setTipValue("0.00");
    setTotalValue("0.00");
    setSelectedPercentage(0);
    setCustomTip("");
    setTipMode("");
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
              onChange={handleBillChange}
              icon={"/icon-dollar.svg"}
              alt={"Dollar Icon"}
            />
            {errors.bill && <div className="error-message">{errors.bill}</div>}
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
                value={customTip}
                onChange={handleCustomTip}
                maxLength={2}
              />
              {tipMode && (
                <div>
                  {tipMode === "percentage" ? (
                    <p>Tip % selected: {selectedPercentage}%</p>
                  ) : (
                    <p>Tip % selected: {customTip}%</p>
                  )}
                </div>
              )}
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
              onChange={handlePeopleChange}
              icon={"/icon-person.svg"}
              alt={"Dollar Icon"}
            />
            {errors.people && (
              <div className="error-message">{errors.people}</div>
            )}
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
