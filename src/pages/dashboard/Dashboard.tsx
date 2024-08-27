import React from "react";
import { connect } from "react-redux";
import ezpayoutlogo from "../../assets/images/logo.png";

export const Dashboard = (props: any) => {
  return (
    <div>
      <div className="text-indigo-400 opacity-50 text-lg font-medium">
        Dashboard works
      </div>
      <img src={ezpayoutlogo} height="100" width="100" alt="ezPayout" />
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);