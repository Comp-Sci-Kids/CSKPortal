"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};
var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
  textAlign: "center"
};

function Footer() {
  return (
    /*#__PURE__*/
    // <div>
    //     <div style={phantom} />
    //     <div style={style}>
    //         <p>&copy; CompSci Kids | Created by Ashay and Ronit</p>
    //     </div>
    // </div>
    React.createElement("div", {
      className: "footer"
    }, /*#__PURE__*/React.createElement("p", null, "\xA9 CompSci Kids | Created by Ashay and Ronit"))
  );
}

var _default = Footer;
exports.default = _default;