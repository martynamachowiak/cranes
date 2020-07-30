import React, { Component } from "react";
import styled from "styled-components";
import "./Crane.css";

const CraneImage = styled.img`
  width: 10%;
`;

class Crane extends Component {
  render() {
    const ifTrue = false;
    return (
      <div className={ifTrue ? "crane" : "alt-class"}>
        <CraneImage src="https://raimondi.co/wp-content/uploads/2017/09/mrt234-1.jpg" />
      </div>
    );
  }
}

export default Crane;
