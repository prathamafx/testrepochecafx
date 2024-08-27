import React from "react";
import loaderImg from "../assets/images/Group 13518.png";
import "./Loader.scss";

// import { css } from "@emotion/react";
// import PuffLoader from "react-spinners/PuffLoader";
// import PropTypes from "prop-types";

// // Can be a string as well. Need to ensure each key-value pair ends with ;
// const override = css`
//   display: block;
//   margin: 0 auto;
// `;

// function Loader({ loading }: any) {
//   return (
//     <>
//       {loading && (
//         <div
//           className="bg-gray-400 opacity-25 w-full h-full absolute inset-0"
//           style={{ zIndex: 99999 }}
//         />
//       )}
//       <div className="sweet-loading z-50">
//         <div
//           className="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
//           style={{ zIndex: 99999 }}
//         >
//           <PuffLoader
//             color={"gray"}
//             loading={loading}
//             css={override}
//             size={120}
//           />
//           {loading && <p></p>}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Loader;
// Loader.prototype = {
//   loading: PropTypes.bool,
// };
// Loader.defaultProps = {
//   loading: false,
// };

import { loading } from "../redux/Loader/loader.action";

function Loader({ loading }: any) {
  return (
    <>
      {loading && (
        <div
          className="bg-gray-400 opacity-50 w-full h-full absolute inset-0"
          style={{ zIndex: 99999 }}
        />
      )}
      {loading && (
        <div className="sweet-loading z-50">
          <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden   flex flex-col items-center justify-center"
            style={{ zIndex: 99999, marginTop: "50px" }}
          >
            <img className="h-10 w-10" src={loaderImg} />
            {/* {loading && ( */}
            <div>
              <p
                className="text-left text-[#126EC9] text-sm font-semibold relative"
                style={{ left: "45px" }}
              >
                LOADING
              </p>
              <div className="dot-loader"></div>
            </div>

            {/* )} */}
          </div>
        </div>
      )}
    </>
  );
}

export default Loader;

Loader.defaultProps = {
  loading: false,
};
