import "/src/pages/css_files/Timelimit.css";


export default function TimeLimit() {

  //help button logic
  const handleHelpButtonClick = () => {
    alert("This is the Time Limit page. Use the plus and Minus buttons to add or subtract from your childs time limit.");
  };

  return (
    <div className="tlcenter-container">
      <h1>Time Limit</h1>
      <p>Set a time limit</p>

      <div className="button-container">
        <button className="plus-button" onClick={handleHelpButtonClick}>+</button>
        <button className="minus-button" onClick={handleHelpButtonClick}>-</button>
      </div>

      <button className="tlhelp-button"onClick={handleHelpButtonClick}>Help</button>
      <label className="timer-box">0.0 Hr</label>
    </div>    
  );   

};
