import React from "react";
import CustomerTable from "./CustomerTable";
import { Transactions } from "../../services";

class CustomerContainer extends React.Component {
  state = {
    query: "",
    photos: "",
  };

  render() {
    return (
      <div className="photosContainer">
        <CustomerTable data={Transactions} />
      </div>
    );
  }
}

export default CustomerContainer;
