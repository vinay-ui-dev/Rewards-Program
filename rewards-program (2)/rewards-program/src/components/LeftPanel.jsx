import React from "react";
import Menu from "./Menu";

class LeftPanel extends React.Component {
  render() {
    return (
      <div className="left-panel">
        <div className="left-header">
          <h3>Menu</h3>
        </div>
        <div className="left-body">
          <Menu />
        </div>
      </div>
    );
  }
}

export default LeftPanel;
