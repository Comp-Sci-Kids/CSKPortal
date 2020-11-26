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

var LoginPage = /*#__PURE__*/function (_React$Component) {
  _inherits(LoginPage, _React$Component);

  var _super = _createSuper(LoginPage);

  function LoginPage(props) {
    var _this;

    _classCallCheck(this, LoginPage);

    _this = _super.call(this, props);
    _this.signIn = _this.signIn.bind(_assertThisInitialized(_this));
    _this.valueChanged = _this.valueChanged.bind(_assertThisInitialized(_this));
    _this.updateState = _this.updateState.bind(_assertThisInitialized(_this));

    document.onkeypress = function (e) {
      if (e.keyCode == 13) {
        _this.signIn();
      }
    };

    _this.state = {
      username: "",
      password: "",
      error: "",
      missingInfo: false,
      incorrect: 0
    };
    return _this;
  }

  _createClass(LoginPage, [{
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
    key: "signIn",
    value: function signIn() {
      var _this2 = this;

      if (this.state.username == "") {
        this.updateState("error", "Missing Field: Email");
        return;
      }

      networkRequest("parent/login", "POST", {
        username: this.state.username,
        password: this.state.password,
        incorrect: this.state.incorrect
      }, function (d) {
        if (!d.success) {
          _this2.setState({
            username: _this2.state.username,
            password: _this2.state.password,
            error: d.message,
            missingInfo: _this2.state.missingInfo,
            incorrect: _this2.state.incorrect + 1
          });
        } else {
          var token = d.token;
          var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          var payload = JSON.parse(jsonPayload);
          localStorage.setItem("token", token);
          localStorage.setItem("account", "parent");
          localStorage.setItem("email", payload.email);
          localStorage.setItem("firstName", payload.firstName);
          localStorage.setItem("lastName", payload.lastName);
          localStorage.setItem("fetchTime", new Date().getTime());

          _this2.props.callback();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var divStyle = {
        width: "100%",
        height: "100%",
        background: "linear-gradient(90deg, rgba(190,58,0,1) 0%, rgba(255,58,0,1) 100%)",
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
      var titleStyle1 = {
        margin: 0,
        fontFamily: "brandFont",
        fontSize: "40px",
        color: appRed,
        textAlign: "center"
      };
      var titleStyle2 = {
        margin: 0,
        fontSize: "20px",
        color: "blue",
        textDecoration: "underline",
        marginTop: '7.5px'
      };
      var inputStyle = {
        borderRadius: "27px",
        border: "2px solid rgba(254,58,0,1)",
        padding: "10px 20px",
        width: "70%",
        height: "30px",
        outline: "none",
        fontSize: "20px",
        marginTop: "20px"
      };
      var buttonStyle = {
        borderRadius: "27px",
        border: "2px solid rgba(254,58,0,1)",
        padding: "5px 5px",
        width: "45%",
        height: "44px",
        outline: "none",
        fontSize: "20px",
        backgroundColor: "#fe3a01",
        color: "white",
        marginTop: "15px",
        cursor: "pointer"
      };
      var errorBoxStyle = {
        position: "fixed",
        width: "90%",
        margin: "auto",
        backgroundColor: "rgba(8,58,194,1)",
        color: "white",
        fontSize: "20px",
        textAlign: "center",
        top: "20px",
        padding: "10px",
        boxSizing: "border-box",
        borderRadius: "8px"
      };
      var errorBox = null;

      if (window.screen.width < mobileThreshold) {
        boxStyle = {
          width: "90vw",
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
        titleStyle1 = {
          margin: 0,
          fontFamily: "brandFont",
          fontSize: "30px",
          color: appRed,
          textAlign: "center"
        };
        titleStyle2 = {
          margin: 0,
          fontSize: "15px",
          color: "blue",
          textDecoration: "underline",
          marginTop: '7.5px'
        };
        inputStyle = {
          borderRadius: "17px",
          border: "2px solid rgba(254,58,0,1)",
          padding: "10px 20px",
          width: "70%",
          height: "15px",
          outline: "none",
          fontSize: "20px",
          marginTop: "20px"
        };
        buttonStyle = {
          borderRadius: "17px",
          border: "2px solid rgba(254,58,0,1)",
          padding: "5px 5px",
          width: "45%",
          height: "30px",
          outline: "none",
          fontSize: "15px",
          backgroundColor: "#fe3a01",
          color: "white",
          marginTop: "15px",
          cursor: "pointer"
        };
        errorBoxStyle = {
          position: "fixed",
          width: "90%",
          margin: "auto",
          backgroundColor: "rgba(8,58,194,1)",
          color: "white",
          fontSize: "20px",
          textAlign: "center",
          top: "20px",
          padding: "10px",
          boxSizing: "border-box",
          borderRadius: "8px"
        };
      }

      if (this.state.error != "") {
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
        style: titleStyle1
      }, "CompSci Kids Parent Login"), /*#__PURE__*/React.createElement("input", {
        style: inputStyle,
        type: "email",
        placeholder: "Email",
        name: "username",
        value: this.state.username,
        onChange: this.valueChanged
      }), /*#__PURE__*/React.createElement("input", {
        style: inputStyle,
        type: "password",
        placeholder: "Password",
        name: "password",
        value: this.state.password,
        onChange: this.valueChanged
      }), /*#__PURE__*/React.createElement("button", {
        style: buttonStyle,
        onClick: this.signIn
      }, "Login"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
        style: titleStyle2,
        onClick: function onClick() {
          return _this3.props.changePage(2);
        }
      }, "Don't have an account?"), /*#__PURE__*/React.createElement("p", {
        style: titleStyle2,
        onClick: function onClick() {
          return _this3.props.changePage(3);
        }
      }, "Forgot your password?"), /*#__PURE__*/React.createElement("p", {
        style: titleStyle2,
        onClick: function onClick() {
          return _this3.props.changePage(5);
        }
      }, "Resend confirmation email")));
    }
  }]);

  return LoginPage;
}(React.Component);