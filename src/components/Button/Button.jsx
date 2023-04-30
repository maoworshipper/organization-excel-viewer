import { Button as ButtonComponent } from "@mui/material/";
import propTypes from "prop-types";

export const Button = ({ text = "", onClick = () => {}, disabled = false }) => {
  return (
    <ButtonComponent
      variant="contained"
      onClick={(e) => onClick(e)}
      disabled={disabled}
    >
      {text}
    </ButtonComponent>
  );
};

Button.propTypes = {
  text: propTypes.string,
  onClick: propTypes.func,
  disabled: propTypes.bool,
};
