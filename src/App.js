
import {Gi3DGlasses}from "react-icons/gi"
import SingelQuestion from "./Question";
import { useState } from "react";
import data from './data';
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="container2"> 
    <h3>سوالی برایتان پیش آمده؟</h3>
    <div className="info">
      {
        questions.map((question,index )=>{
          return  <SingelQuestion key={index} {...question} />
        })
      }
     

    </div>

    </div>
  );
}

export default App;
