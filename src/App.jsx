import React from "react";
import CustomHeader from "./assets/CustomHeader";
import DateRange from "./DateRange";
import { useState } from "react";
import DatePicker from "react-datepicker"
import { forwardRef } from "react";
function App() {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <>
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
    <p/>
    <CustomHeader/>
    <p/>
    <DateRange/>
    </>
    
  );
};

export default App
