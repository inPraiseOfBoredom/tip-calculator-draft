import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faUser } from "@fortawesome/free-solid-svg-icons";

const Form = ({ bill, people, handleTip, handleBill, handlePeople, error }) => {
  return (
    <div className="form-container">
      <form>
        <div className="bill-container">
          <p className="form-headline">Bill </p>
          <div className="input-icon">
            <FontAwesomeIcon icon={faDollarSign} class="icon" />
          </div>
          <input
            name="bill-amount"
            id="bill-amount"
            type="text"
            value={bill}
            onChange={handleBill}
          />
        </div>
        <p className="form-headline"> Select Tip %</p>
        <div className="tip-container">
          <input
            type="button"
            className="tip-button"
            value="5%"
            onClick={handleTip}
          />
          <input
            type="button"
            className="tip-button"
            value="10%"
            onClick={handleTip}
          />

          <input
            type="button"
            className="tip-button"
            value="15%"
            onClick={handleTip}
          />

          <input
            type="button"
            className="tip-button"
            value="25%"
            onClick={handleTip}
          />

          <input
            type="button"
            className="tip-button"
            value="50%"
            onClick={handleTip}
          />
          <input
            type="text"
            className="custom"
            placeholder="Custom"
            onChange={handleTip}
          />
        </div>
        <div className="people-container">
          <div className="text-container">
            <p className="form-headline">Number of People </p>
            <span className={`${error ? "warning" : ""}`}> {error} </span>{" "}
          </div>
          <div className="input-icon">
            <FontAwesomeIcon icon={faUser} class="icon" />
          </div>
          <input
            name="people-number"
            id="people-number"
            type="text"
            value={people}
            onChange={handlePeople}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Form;
