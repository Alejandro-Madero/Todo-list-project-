import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? "" : "invalid"}`}>
        <label htmlFor="goal">Course Goal</label>
        <input
          id="goal"
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>
      <Button type="submit" onClick={formSubmitHandler}>
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
