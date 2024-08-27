import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const Sidebar = (props: any) => {
  return <div>sidebar works!</div>;
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);