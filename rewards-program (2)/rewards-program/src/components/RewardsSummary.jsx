import React, { Component } from "react";
import { Card } from "antd";
import { getPoints } from "../utils/fetch";

class RewardsSummary extends Component {
  state = {
    totalPoints: 0,
  };

  componentDidMount() {
    debugger;
    const data = this.props.summary;

    const rewards = data.map((item) => {
      let points = 0;
      points += getPoints(item.price);
      return points;
    });
    const totalPoints = rewards.reduce((result, i) => {
      return result + i;
    });
    this.setState({
      totalPoints: totalPoints,
    });
  }
  getStatus(points) {
    if (points <= 5000) {
      return "Silver";
    } else if (points > 5000 && points <= 10000) {
      return "Gold";
    } else {
      return "Platinum";
    }
  }
  render() {
    return (
      <div className="site-card-border-less-wrapper">
        <Card title="Rewards Summary" bordered={false} style={{ width: 300 }}>
          <p>Total Rewards : {this.state.totalPoints}</p>
          <p>Status : {this.getStatus(this.state.totalPoints)}</p>
        </Card>
      </div>
    );
  }
}

export default RewardsSummary;
