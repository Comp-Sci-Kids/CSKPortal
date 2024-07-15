"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RegisterPopup = /*#__PURE__*/function (_React$Component) {
  _inherits(RegisterPopup, _React$Component);

  var _super = _createSuper(RegisterPopup);

  function RegisterPopup(props) {
    var _this;

    _classCallCheck(this, RegisterPopup);

    _this = _super.call(this, props);
    _this.valueChanged = _this.valueChanged.bind(_assertThisInitialized(_this));
    _this.updateState = _this.updateState.bind(_assertThisInitialized(_this));
    _this.state = {
      error: ""
    };
    return _this;
  }

  _createClass(RegisterPopup, [{
    key: "valueChanged",
    value: function valueChanged(e) {
      this.updateState(e.target.name, e.target.value);
    }
  }, {
    key: "updateState",
    value: function updateState(key, val) {
      this.state[key] = val;
      this.setState(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var popupStyle = {
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      };
      var boxStyle = {
        width: "fit-content",
        height: "fit-content",
        backgroundColor: "white",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflowY: "hidden",
        overflowX: 'hidden'
      };
      var contentDiv = {
        width: "90%"
      };
      var buttonDivStyle = {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        boxSizing: "border-box",
        paddingBottom: "10px",
        paddingRight: "10px"
      };
      var divStlye = {
        boxSizing: "border-box",
        width: "100%",
        padding: "5px 0px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end"
      };
      var labelStyle = {
        margin: 0,
        marginRight: "40px",
        fontSize: "25px",
        fontWeight: "bold"
      };
      var inputStyle = {
        height: "20px",
        fontSize: "18px",
        width: "200px"
      };
      var headerStyle = {
        fontSize: "35px"
      };

      if (window.screen.width < 1280) {
        popupStyle = {
          position: "fixed",
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center" // overflowY: 'scroll',

        };
        boxStyle = {
          width: "fit-content",
          height: "fit-content",
          backgroundColor: "white",
          borderRadius: "25px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
          position: "relative" // overflowY: 'auto',
          // overflowX : 'auto'

        };
        contentDiv = {
          width: "95vw"
        };
        buttonDivStyle = {
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          boxSizing: "border-box",
          paddingBottom: "10px",
          paddingRight: "10px"
        };
        divStlye = {
          boxSizing: "border-box",
          width: "100%",
          padding: "5px 0px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end"
        };
        labelStyle = {
          margin: 0,
          marginRight: "20px",
          fontSize: "15px",
          fontWeight: "bold",
          marginLeft: "7px"
        };
        inputStyle = {
          height: "15px",
          fontSize: "10px",
          width: "100px",
          marginRight: "7px"
        };
        headerStyle = {
          fontSize: "22px",
          marginLeft: "7px"
        };
      }

      var errorMessage = null;

      if (this.state.error != "") {
        var errorStyle = {
          color: "red",
          fontSize: "18px",
          textAlign: "center",
          fontWeight: "bold"
        };
        errorMessage = /*#__PURE__*/React.createElement("p", {
          style: errorStyle
        }, this.state.error);
      }

      var hrStyle = {
        border: '5px dotted ' + appRed,
        borderStyle: 'none none dotted',
        color: '#fff',
        backgroundColor: '#fff'
      };
      return /*#__PURE__*/React.createElement("div", {
        style: popupStyle
      }, /*#__PURE__*/React.createElement("div", {
        style: boxStyle
      }, /*#__PURE__*/React.createElement("div", {
        style: contentDiv
      }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
        href: "https://www.youtube.com/watch?v=-h3o3GXP_2c"
      }, "Tutorial Link"), /*#__PURE__*/React.createElement("br", null), "1.Go to the Children tab", /*#__PURE__*/React.createElement("br", null), "2.Click the plus button and add your child's information", /*#__PURE__*/React.createElement("br", null), "3.Go to the Register tab", /*#__PURE__*/React.createElement("br", null), "4.Click the register button and select the child you would like to register for the session."), errorMessage), /*#__PURE__*/React.createElement("div", {
        style: buttonDivStyle
      }, /*#__PURE__*/React.createElement(IconButton, {
        src: "images/close.png",
        onClick: this.props.closeCallback
      }))));
    }
  }]);

  return RegisterPopup;
}(React.Component);