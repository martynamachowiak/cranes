import React from "react";

const Header = (props) => {
  const { message } = props;
  return (
    <div>
      <h1>{message}!</h1>
    </div>
  );
};

export default Header;
