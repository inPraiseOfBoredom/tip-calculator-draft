import "./App.css";
import Form from "./components/Form";
import Output from "./components/Output";
import React, { useState, useEffect } from "react";

function App() {
  const [bill, setBill] = useState("0.00");
  const [total, setTotal] = useState("0.00");
  const [people, setPeople] = useState(0);
  const [tip_per_person, setTip_per_person] = useState("0.00");
  const [total_per_person, setTotal_per_person] = useState("0.00");
  const [tip, setTip] = useState("0.00");
  const [tipPercent, setTipPercent] = useState(0);
  const [error, setError] = useState("");

  const calculateTip = () => {
    setTip((parseFloat(bill) * tipPercent * 0.01).toFixed(2));
    setTotal((parseFloat(tip) + parseFloat(bill)).toFixed(2));

    if (people !== 0) {
      setTip_per_person((tip / people).toFixed(2));
      setTotal_per_person((total / people).toFixed(2));
      console.log(total, total_per_person);
      setError("");
    } else {
      setError("Can't be zero");
    }
  };

  const handleTip = (event) => {
    event.preventDefault();
    setTipPercent(parseInt(event.target.value.replace(/[^\d]/, "")));
    console.log(tipPercent);
  };

  const handleBill = (event) => {
    event.preventDefault();
    let interim = parseInt(event.target.value.replace(/[^\d]/, ""));
    setBill((interim / 100).toFixed(2));
  };

  const handlePeople = (event) => {
    event.preventDefault();
    setPeople(parseInt(event.target.value.replace(/[^\d]/, "")));
  };

  const reset = () => {
    setBill("");
    setPeople(0);
  };

  useEffect(() => {
    calculateTip();
  }, [bill, tipPercent, people]);

  return (
    <div className="App">
      <div className="App-header">
        <h5 className="splitter"> spli</h5>
        <h5 className="splitter"> tter</h5>
      </div>

      <div className="wrapper">
        <Form
          bill={bill}
          handleBill={handleBill}
          people={people}
          handlePeople={handlePeople}
          tip={tip}
          handleTip={handleTip}
          error={error}
        />

        <Output
          tip_per_person={tip_per_person}
          total_per_person={total_per_person}
          reset={reset}
        />
      </div>
    </div>
  );
}

export default App;
