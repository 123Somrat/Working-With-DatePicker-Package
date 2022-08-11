import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker"
function App() {
  const [startDate, setStartDate] = useState(new Date());
  
    return(
         <div>
             <DatePicker selected={startDate} onChange={(date)=>{
              setStartDate(date)
              console.log(startDate)
             }}/>
         </div>

    )
}

export default App
