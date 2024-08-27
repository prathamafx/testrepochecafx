import React, { useEffect, useState } from "react";
import { Field, ErrorMessage } from "formik";
import { FiEye } from "react-icons/fi";
import PropTypes from "prop-types";
import { TextFieldProps } from "../interfaces";
import { ViewSvg } from "../components/svg";
import { disableAutocomplete, showPasswordIcon } from "../Utility/Helper";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function TextField(props: TextFieldProps) {
  const [type, setType] = useState<string>(props?.type);
  let icon: any = undefined;
  if (props.name === "password") {
    icon = <FiEye />;
  }

  const showPassword = () => {
    console.log("show");
    let newType: string = type === "password" ? "text" : "password";
    setType(newType);
  };
  useEffect(() => {
    setTimeout(() => {
      disableAutocomplete();
    }, 1000);
  }, []);

  return (
    <div className="relative z-0 w-full">
      <Field
        type={type}
        title={props.title}
        placeholder={props.placeholder}
        name={props.name}
        maxLength={props.maxLength}
        value={props.value}
        //   className={`${props.width} bg-white disabled:bg-gray-100  rounded border border-gray-300 focus:border-themecolor focus:ring-2
        //  focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
        className={`block ${
          props.width ? props.width : "w-full"
        }  py-2 px-3 mt-0 text-sm placeholder-gray-500 placeholder:focus:text-white bg-white border appearance-none rounded-md  border-gray-300 focus:ring-themecolor focus:border-themecolor focus:outline-none focus:ring-0 disabled:border-slate-200`}
        inputprops={{
          endAdornment: icon,
        }}
        onChange={props?.onChange}
        onBlur={props?.onBlur}
        onFocus={props?.onFocus}
        disabled={props.disabled}
        aria-label={props.placeholder}
        onPaste={props?.onPaste ? props?.onPaste : null}
        onCopy={props?.onCopy ? props?.onCopy : null}
        onCut={props?.onCut ? props?.onCut : null}
      />
      {props.placeholder ? (
        <label
          // className="leading-7 text-sm text-gray-800 font-medium block"
          title={props.placeholder}
          className="absolute truncate floating-lable duration-300  left-3 -z-10 origin-0   max-w-90"
          htmlFor={props.name}
        >
          {props.placeholder}
        </label>
      ) : null}
      {showPasswordIcon.includes(props?.name) ? (
        <div className="viewIcon" onClick={showPassword}>
          {type === "password" ? (
            <AiOutlineEye
              style={{
                fontSize: "22px",
                cursor: "pointer",
              }}
            />
          ) : (
            <AiOutlineEyeInvisible
              style={{
                fontSize: "22px",
                cursor: "pointer",
              }}
            />
          )}
        </div>
      ) : null}
      <ErrorMessage
        name={props.name}
        render={props.error}
        className="text-sm"
      />
    </div>
  );
}

export default TextField;
TextField.prototype = {
  name: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  maxLength: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.any,
};
TextField.defaultProps = {
  label: "",
  placeholder: "Name",
  type: "number",
  width: "w-80",
  maxLength: "100",
  // value: ''
};
