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

var InfoPopup = /*#__PURE__*/function (_React$Component) {
  _inherits(InfoPopup, _React$Component);

  var _super = _createSuper(InfoPopup);

  function InfoPopup(props) {
    var _this;

    _classCallCheck(this, InfoPopup);

    _this = _super.call(this, props);
    _this.stopRecur = _this.stopRecur.bind(_assertThisInitialized(_this));
    _this.setCookie = _this.setCookie.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InfoPopup, [{
    key: "stopRecur",
    value: function stopRecur() {
      this.props.closeCallback();
      this.setCookie('cskparent', 'visitort', 30);
    }
  }, {
    key: "setCookie",
    value: function setCookie(name, value, days) {
      var expires = "";

      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }

      document.cookie = name + "=" + (value || "") + expires + "; path=/";
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
        justifyContent: "center",
        zIndex: "15"
      };
      var boxStyle = {
        width: "60%",
        height: "fit-content",
        backgroundColor: "white",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflowY: "auto"
      };
      var contentDiv = {
        width: "90%"
      };
      var buttonDivStyle = {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        boxSizing: "border-box",
        paddingBottom: "10px",
        paddingRight: "10px"
      };
      var labelStyle = {
        margin: 0,
        marginRight: "40px",
        fontSize: "25px",
        fontWeight: "bold"
      };
      var headerStyle = {
        fontSize: "35px"
      };
      var titleStyle2 = {
        margin: 0,
        fontSize: "20px",
        color: "blue",
        textDecoration: "underline",
        marginTop: '7.5px'
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
          justifyContent: "center",
          zIndex: "15" // overflowY: 'scroll',

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
        labelStyle = {
          margin: 0,
          marginRight: "20px",
          fontSize: "15px",
          fontWeight: "bold",
          marginLeft: "7px"
        };
        headerStyle = {
          fontSize: "22px",
          marginLeft: "7px"
        };
        titleStyle2 = {
          margin: 0,
          fontSize: "20px",
          color: "blue",
          textDecoration: "underline",
          marginTop: '7.5px'
        };
      }

      return /*#__PURE__*/React.createElement("div", {
        style: popupStyle
      }, /*#__PURE__*/React.createElement("div", {
        style: boxStyle
      }, /*#__PURE__*/React.createElement("div", {
        style: contentDiv
      }, /*#__PURE__*/React.createElement("h1", {
        style: headerStyle
      }, "Welcome to the CompSci Kids Portal!"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("p", {
        style: labelStyle
      }, "We at CompSci Kids have created a new page designed for the CompSci Parents! Here, parents can add and modify their children information and quickly register for a new CompSci Kids Session with just a few clicks. Create your account and get started!")), /*#__PURE__*/React.createElement("div", {
        style: buttonDivStyle
      }, /*#__PURE__*/React.createElement("button", {
        style: titleStyle2,
        onClick: this.stopRecur
      }, "I don\u2019t want to see this again"), /*#__PURE__*/React.createElement("button", {
        style: titleStyle2,
        onClick: this.props.closeCallback
      }, "Close"))));
    }
  }]);

  return InfoPopup;
}(React.Component);