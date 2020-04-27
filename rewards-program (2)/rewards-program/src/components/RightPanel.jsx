import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notfound from "./routes/NotFound";
import CustomerContainer from "./routes/CustomerContainer";
import TransactionsView from "./routes/TransactionsView";

class RightPanel extends React.Component {
  render() {
    return (
      <div className="right-panel">
        <div className="right-header">
          <h3>Rewards Program</h3>
        </div>
        <div className="right-body">
          <Switch>
            <Route exact path="/" component={CustomerContainer} />
            <Route exact path="/:id" component={TransactionsView} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default RightPanel;
