import React from "react";
import propTypes from "prop-types";

import { Base } from "../styles";

function Button({ children, ...props }) {
  return <Base {...props}>{children}</Base>;
}

Button.propTypes = {
  children: propTypes.any
};

export default Button;
