import React from "react";
import "./button.scss";
import PropTypes from "prop-types";
import { ButtonProps } from "../interfaces";

const Button = (props: ButtonProps) => {
  // console.log(props?.text, props.disabled);

  return (
    <div className=" ">
      <button
        onClick={props.onClick}
        className={`btn ${props?.className}`}
        disabled={props.disabled}
        type={props?.type}
      >
        {props.icon ? props.icon : ""}
        {props?.children}
        {props?.text}
      </button>
    </div>
  );
};

export default Button;

Button.prototype = {
  text: PropTypes.string,
  onClick: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  icon: PropTypes.any,
};

Button.defaultProps = {
  text: "",
  type: "button",
  className:
    "bg-linearBgDark hover:bg-linearBgDark  pt-1 pb-1 pl-3 pr-3  text-sm flex justify-center items-center rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed",
  // className: "button text-white text-sm flex justify-center items-center rounded-2xl ml-2 h-8 w-24 disabled:opacity-50 disabled:cursor-not-allowed bg-linearBgDark hover:bg-linearBgDark",
  icon: "",
  disabled: false,
};
