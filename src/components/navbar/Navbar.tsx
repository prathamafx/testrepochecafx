import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const Navbar = (props: any) => {
  return <div>NavBar Works!</div>;
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);