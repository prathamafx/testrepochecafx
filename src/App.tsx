import React from "react";
import logo from "./logo.svg";
import { hot } from "react-hot-loader/root";
import { Toaster } from "react-hot-toast";
import Loader from "./common/Loader";
import AppRouter from "./routes";
import { connect } from "react-redux";
import { RootState } from "./redux/store";

class App extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const flg = false;
    return (
      <>
        <div className="App">
          <Toaster position="top-right" reverseOrder={flg} />
          <Loader loading={this.props.appReducer.loading} />
          {/* <ModalProvider> */}
          <AppRouter />
          {/* </ModalProvider> */}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return { appReducer: state.appReducer };
};

const mapDispatchToProps = () => {};
export default connect(mapStateToProps, mapDispatchToProps)(hot(App));