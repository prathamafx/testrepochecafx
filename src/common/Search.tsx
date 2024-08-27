import React from "react";
import "./search.scss";
import PropTypes from "prop-types";
import { SearchSvg } from "../components/svg";
import { isNullUndefinedOrBlank } from "../Utility/Helper";
import { MAX_CHAR_TO_SEARCH } from "../Utility/Validation_Helper";

const Search = (props: any) => {
  let field: any = document.querySelector('[name="name"]');

  // if (!isNullUndefinedOrBlank(field)) {
  //   field.addEventListener("keypress", function (event) {
  //     let key = event.keyCode;
  //     if (key === 32) {
  //       event.preventDefault();
  //     }
  //   });
  // }

  return (
    <div className={props.className}>
      <SearchSvg />
      <input
        onChange={props.onChange}
        type="text"
        placeholder={`${props.placeholder}(Min ${MAX_CHAR_TO_SEARCH} Characters)`}
        id="name"
        name="name"
        value={props.value}
        className="searchByString w-full h-10 bg-searchRgba rounded-3xl border border-gray-300 focus:border-cpurple focus:ring-2  text-base outline-none text-gray-700 py-1 pl-11 pr-4 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
};

export default Search;

Search.prototype = {
  className: PropTypes.string,
  onChange: PropTypes.any,
  searchTxt: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};
Search.defaultProps = {
  searchTxt: "Search",
  placeholder: "Search",
};
