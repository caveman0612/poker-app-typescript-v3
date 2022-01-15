import React from "react";

function ActionButtons() {
  return (
    <div className="actionButtons">
      <div className="buttons">
        <button className="action">fold</button>
        <button className="action">call</button>
        <button className="action">raise</button>
      </div>

      <input type="checkbox" className="buttonLocation" />
    </div>
  );
}

export default ActionButtons;
