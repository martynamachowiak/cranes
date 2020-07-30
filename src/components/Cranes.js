import React, { Component } from "react";

class Cranes extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="selected-cranes">
        <h2>These are pics of my fav cranes</h2>
        {children}
      </div>
    );
  }
}

export default Cranes;
