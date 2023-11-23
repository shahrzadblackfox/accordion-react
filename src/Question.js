import React ,{useState} from "react";
import { FaMinusCircle,  FaPlusCircle } from "react-icons/fa";

function Question() {
    const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="question">
      <header>
        <h4>HI</h4>
        <button onClick={ () => setShowInfo(!showInfo)}>< FaPlusCircle/></button>
      </header>
      {
        showInfo && <p>skjhfgkjsdh</p>
      }
    </div>
  );
}

export default Question;
