import React, { Component, Fragment } from "react";
import { Table, Card, Select } from "antd";
import { Link } from "react-router-dom";
import { Transactions } from "../../services";
import RewardsSummary from "../RewardsSummary";

const { Option } = Select;
class TransactionsView extends Component {
  state = {
    results: "",
    totalPoints: 0,
    custId: "",
  };

  componentDidMount() {
    const custId = this.props.match.params.id;
    const transactionsData = Transactions.filter((item) => {
      return item.customerId === custId;
    });
    this.setState({
      results: transactionsData[0].transactions,
      custId: custId,
    });
  }

  getPoints(money) {
    let points = 0;
    if (money > 50) {
      points += Math.min(100, money) - 50;
    }
    if (money >= 100) {
      points += 2 * (money - 100);
    }
    return points;
  }
  onChange = (obj) => {
    console.log(this.state.results);
    const transactionsData = Transactions.filter((item) => {
      return item.customerId === this.state.custId;
    });
    const filterResults = transactionsData[0].transactions.filter((item) => {
      return item.month === obj.value;
    });
    this.setState({
      results: filterResults,
    });
  };
  render() {
    const columns = [
      {
        title: "transationId",
        dataIndex: "transationId",
        width: 200,
        key: "transationId",
      },
      {
        title: "Item",
        dataIndex: "item",
        width: 200,
        key: "item",
      },
      {
        title: "Price",
        dataIndex: "price",
        width: 200,
        key: "price",
      },
      {
        title: "Transaction Month",
        dataIndex: "month",
        width: 200,
        key: "month",
      },
      {
        title: "Reward Points",
        dataIndex: "points",
        width: 200,
        key: "points",
        render: (text, record) => {
          const rewards = this.getPoints(record.price);
          return <span>{rewards}</span>;
        },
      },
    ];
    console.log("transactions", this.state.results);
    const { results } = this.state;
    return (
      <Fragment>
        {results && results.length > 0 && (
          <div>
            <div className="select-wrapper">
              <Select
                labelInValue
                style={{ width: 300 }}
                onChange={this.onChange}
                placeholder="Month"
              >
                <Option value="Jan"> Jan </Option>
                <Option value="Feb">Feb </Option>
                <Option value="Mar">Mar </Option>
              </Select>
            </div>

            <Table
              rowKey={(record) => record.customerId}
              columns={columns}
              dataSource={this.state.results || null}
              pagination={false}
            />
            <RewardsSummary summary={this.state.results} />
          </div>
        )}
      </Fragment>
    );
  }
}

export default TransactionsView;
