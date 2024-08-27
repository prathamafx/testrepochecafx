import React from "react";
import { connect } from "react-redux";

export const NotFound = (props: any) => {
  return <div>Not Found Works!</div>;
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);