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

var SignUpPage = /*#__PURE__*/function (_React$Component) {
  _inherits(SignUpPage, _React$Component);

  var _super = _createSuper(SignUpPage);

  function SignUpPage(props) {
    var _this;

    _classCallCheck(this, SignUpPage);

    _this = _super.call(this, props);
    _this.signUp = _this.signUp.bind(_assertThisInitialized(_this));
    _this.valueChanged = _this.valueChanged.bind(_assertThisInitialized(_this));
    _this.updateState = _this.updateState.bind(_assertThisInitialized(_this));

    document.onkeypress = function (e) {
      if (e.keyCode == 13) {
        _this.signUp();
      }
    };

    _this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      relationship: "",
      email: "",
      prefix: "Prefix",
      password: "",
      password2: "",
      error: "",
      success: false
    };
    return _this;
  }

  _createClass(SignUpPage, [{
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
    key: "signUp",
    value: function signUp() {
      var _this2 = this;

      //make sure all fields are filled
      var vals = [this.state.firstname, this.state.lastname, this.state.relationship, this.state.phone, this.state.email, this.state.prefix, this.state.password];

      for (var i = 0; i < vals.length; i++) {
        if (vals[i] == "") {
          this.updateState("error", "Please Fill All Fields");
          return;
        }
      }

      if (this.state.prefix == "Prefix") {
        this.updateState("error", "Please Fill All Fields");
        return;
      }

      if (this.state.password != this.state.password2) {
        this.updateState("error", "Your passwords do not match");
        return;
      } //continue to signup


      var capitalize = function capitalize(s) {
        if (typeof s !== 'string') return '';
        return s.charAt(0).toUpperCase() + s.slice(1);
      };

      networkRequest("parent/signup", "POST", {
        firstName: capitalize(this.state.firstname.toLowerCase()),
        lastName: capitalize(this.state.lastname.toLowerCase()),
        prefix: this.state.prefix,
        phone: this.state.phone,
        email: this.state.email,
        password: this.state.password,
        relationship: this.state.relationship
      }, function (d) {
        if (!d.success) {
          _this2.setState({
            firstName: capitalize(_this2.state.firstname.toLowerCase()),
            lastName: capitalize(_this2.state.lastname.toLowerCase()),
            prefix: _this2.state.prefix,
            phone: _this2.state.phone,
            email: _this2.state.email,
            password: _this2.state.password,
            relationship: _this2.state.relationship,
            error: d.message,
            success: false
          });
        } else {
          _this2.setState({
            firstName: "",
            lastName: "",
            prefix: "Prefix",
            phone: "",
            email: "",
            password: "",
            relationship: "",
            error: d.message,
            success: true
          });
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
      var selectStyle = {
        borderRadius: "27px",
        border: "2px solid rgba(8,58,174,1)",
        padding: "10px 20px",
        // width: "40%",
        // height: "30px",
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
      }, "CompSci Kids Parent Sign Up"), /*#__PURE__*/React.createElement("input", {
        style: inputStyle,
        type: "text",
        placeholder: "First Name",
        name: "firstname",
        value: this.state.firstname,
        onChange: this.valueChanged
      }), /*#__PURE__*/React.createElement("input", {
        style: inputStyle,
        type: "text",
        placeholder: "Last Name",
        name: "lastname",
        value: this.state.lastname,
        onChange: this.valueChanged
      }), /*#__PURE__*/React.createElement("select", {
        style: selectStyle,
        name: "prefix",
        value: this.state.prefix,
        onChange: this.valueChanged
      }, /*#__PURE__*/React.createElement("option", {
        value: "",
        defaultValue: true,
        hidden: true
      }, "Prefix"), /*#__PURE__*/React.createElement("option", {
        value: "Mr"
      }, "Mr"), /*#__PURE__*/React.createElement("option", {
        value: "Ms"
      }, "Mrs"), /*#__PURE__*/React.createElement("option", {
        value: "Mrs"
      }, "Ms")), /*#__PURE__*/React.createElement("select", {
        style: selectStyle,
        name: "relationship",
        value: this.state.relationship,
        onChange: this.valueChanged
      }, /*#__PURE__*/React.createElement("option", {
        value: "",
        defaultValue: true,
        hidden: true
      }, "Relationship"), /*#__PURE__*/React.createElement("option", {
        value: "Father"
      }, "Father"), /*#__PURE__*/React.createElement("option", {
        value: "Mother"
      }, "Mother"), /*#__PURE__*/React.createElement("option", {
        value: "Other"
      }, "Other")), /*#__PURE__*/React.createElement("input", {
        style: inputStyle,
        type: "tel",
        placeholder: "Phone",
        name: "phone",
        value: this.state.phone,
        onChange: this.valueChanged
      }), /*#__PURE__*/React.createElement("input", {
        style: inputStyle,
        type: "email",
        placeholder: "Email",
        name: "email",
        value: this.state.email,
        onChange: this.valueChanged
      }), /*#__PURE__*/React.createElement("input", {
        style: inputStyle,
        type: "password",
        placeholder: "Password",
        name: "password",
        value: this.state.password,
        onChange: this.valueChanged
      }), /*#__PURE__*/React.createElement("input", {
        style: inputStyle,
        type: "password",
        placeholder: "Confirm Password",
        name: "password2",
        value: this.state.password2,
        onChange: this.valueChanged
      }), /*#__PURE__*/React.createElement("button", {
        style: buttonStyle,
        onClick: this.signUp
      }, "Sign Up"), /*#__PURE__*/React.createElement("button", {
        style: buttonStyle,
        onClick: function onClick() {
          return _this3.props.changePage(1);
        }
      }, "Back")));
    }
  }]);

  return SignUpPage;
}(React.Component);