import React, { Component } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";

class CustomerTable extends Component {
  state = {};

  render() {
    const columns = [
      {
        title: "Customer Id",
        dataIndex: "customerId",
        width: 200,
        render: (text, record) => {
          return (
            <strong>
              <Link
                to={{
                  pathname: `${record.customerId}`,
                }}
              >
                {text}
              </Link>
            </strong>
          );
        },
      },
      {
        title: "Name",
        dataIndex: "fullName",
        width: 200,
      },
      {
        title: "Email",
        dataIndex: "email",
        width: 200,
      },
      {
        title: "Phone No",
        dataIndex: "contactNo",
        width: 200,
      },
      {
        title: "Status",
        dataIndex: "status",
        width: 200,
      },
    ];
    const { data } = this.props;
    return <Table columns={columns} dataSource={data} pagination={false} />;
  }
}

export default CustomerTable;
