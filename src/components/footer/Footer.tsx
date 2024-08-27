import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const Footer = (props: any) => {
  return <div>Footer works!</div>;
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);