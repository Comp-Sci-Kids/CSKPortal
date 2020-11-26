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

var ResendConfirmation = /*#__PURE__*/function (_React$Component) {
  _inherits(ResendConfirmation, _React$Component);

  var _super = _createSuper(ResendConfirmation);

  function ResendConfirmation(props) {
    var _this;

    _classCallCheck(this, ResendConfirmation);

    _this = _super.call(this, props);
    _this.valueChanged = _this.valueChanged.bind(_assertThisInitialized(_this));
    _this.updateState = _this.updateState.bind(_assertThisInitialized(_this));
    _this.confirmationEmail = _this.confirmationEmail.bind(_assertThisInitialized(_this));

    document.onkeypress = function (e) {
      if (e.keyCode == 13) {
        _this.resetPassword();
      }
    };

    _this.state = {
      email: "",
      error: "",
      success: false
    };
    return _this;
  }

  _createClass(ResendConfirmation, [{
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
    key: "confirmationEmail",
    value: function confirmationEmail() {
      var _this2 = this;

      if (confirm("Are you sure you want to send a new confirmation email?")) {
        networkRequest("parent/sendConfirmation", "POST", {
          email: this.state.email
        }, function (d) {
          _this2.state["error"] = d.message;
          _this2.state["success"] = d.success;

          _this2.setState(_this2.state);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var divStyle = {
        width: "100%",
        height: "100%",
        background: "linear-gradient(90deg, rgba(8,58,134,1) 0%, rgba(8,58,194,1) 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0
      };
      var boxStyle = {
        width: "60vh",
        backgroundColor: "white",
        borderRadius: "30px",
        boxShadow: "10px 10px 18px rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "20px 0",
        zIndex: "10"
      };
      var titleStyle = {
        margin: 0,
        fontFamily: "brandFont",
        fontSize: "40px",
        color: appRed
      };
      var inputStyle = {
        borderRadius: "27px",
        border: "2px solid rgba(8,58,174,1)",
        padding: "10px 20px",
        width: "70%",
        height: "30px",
        outline: "none",
        fontSize: "20px",
        marginTop: "20px"
      };
      var buttonStyle = {
        borderRadius: "27px",
        border: "2px solid rgba(8,58,174,1)",
        padding: "5px 5px",
        width: "45%",
        height: "44px",
        outline: "none",
        fontSize: "20px",
        backgroundColor: "#083ab9",
        color: "white",
        marginTop: "15px",
        cursor: "pointer"
      };

      if (window.screen.width < 1280) {
        divStyle = {
          width: "100%",
          height: "100%",
          background: "linear-gradient(90deg, rgba(8,58,134,1) 0%, rgba(8,58,194,1) 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          padding: 0
        };
        boxStyle = {
          width: "95vw",
          backgroundColor: "white",
          borderRadius: "30px",
          boxShadow: "10px 10px 18px rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          boxSizing: "border-box",
          padding: "20px 0",
          zIndex: "10"
        };
        titleStyle = {
          margin: 0,
          fontFamily: "brandFont",
          fontSize: "40px",
          color: appRed,
          textAlign: "center"
        };
        inputStyle = {
          borderRadius: "17px",
          border: "2px solid rgba(8,58,174,1)",
          padding: "10px 20px",
          width: "70%",
          height: "15px",
          outline: "none",
          fontSize: "12px",
          marginTop: "20px"
        };
        buttonStyle = {
          borderRadius: "17px",
          border: "2px solid rgba(8,58,174,1)",
          padding: "5px 5px",
          width: "45%",
          height: "44px",
          outline: "none",
          fontSize: "15px",
          backgroundColor: "#083ab9",
          color: "white",
          marginTop: "15px",
          cursor: "pointer"
        };
      }

      var errorBox = null;
      var color = "red";

      if (this.state.success) {
        color = "green";
      }

      if (this.state.error != "") {
        var errorBoxStyle = {
          position: "fixed",
          width: "90%",
          margin: "auto",
          backgroundColor: color,
          color: "white",
          fontSize: "20px",
          textAlign: "center",
          top: "20px",
          padding: "10px",
          boxSizing: "border-box",
          borderRadius: "8px",
          zIndex: "20"
        };
        errorBox = /*#__PURE__*/React.createElement("div", {
          style: errorBoxStyle
        }, this.state.error);
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "area",
        style: divStyle
      }, /*#__PURE__*/React.createElement("ul", {
        className: "circles"
      }, /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null), /*#__PURE__*/React.createElement("li", null)), errorBox, /*#__PURE__*/React.createElement("div", {
        style: boxStyle
      }, /*#__PURE__*/React.createElement("h1", {
        style: titleStyle
      }, "Resend Confirmation Email"), /*#__PURE__*/React.createElement("input", {
        style: inputStyle,
        type: "email",
        placeholder: "Email",
        name: "email",
        value: this.state.email,
        onChange: this.valueChanged
      }), /*#__PURE__*/React.createElement("button", {
        style: buttonStyle,
        onClick: this.confirmationEmail
      }, "Send"), /*#__PURE__*/React.createElement("button", {
        style: buttonStyle,
        onClick: function onClick() {
          return _this3.props.changePage(1);
        }
      }, "Back")));
    }
  }]);

  return ResendConfirmation;
}(React.Component);