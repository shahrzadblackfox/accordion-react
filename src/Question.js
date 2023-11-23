import React ,{useState} from "react";
import { FaMinusCircle,  FaPlusCircle } from "react-icons/fa";

function Question({title, info}) {
    const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="question" onClick={ () => setShowInfo(!showInfo)} >

      <header>
        <h4>{title}</h4>
        <button onClick={ () => setShowInfo(!showInfo)}>
            {
                showInfo ? < FaMinusCircle/> : <FaPlusCircle />
            }
        </button>
      </header>
      {
        showInfo && <p>{info}</p>
      }
    </div>
  );
}

export default Question;
