import React from "react";

const Output = ({ tip_per_person, total_per_person, reset }) => {
  return (
    <div className="output-container">
      <div className="output-container-internal">
        <div className="tip-amount">
          <div className="tip-text">
            <p className="primary-text">Tip Amount</p>
            <p className="secondary-text"> / person</p>
          </div>
          <div className="tip-sum">
            <span className="sum-primary">${tip_per_person}</span>
          </div>
        </div>
        <div className="total">
          <div className="total-text">
            <p className="primary-text">Total</p>
            <p className="secondary-text"> / person</p>
          </div>
          <div className="total-sum">
            <span className="sum-primary">${total_per_person}</span>
          </div>
        </div>
      </div>

      <div className="button-container">
        <button className="reset-button" onClick={reset}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Output;
