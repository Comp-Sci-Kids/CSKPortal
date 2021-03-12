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

var AccountPage = /*#__PURE__*/function (_React$Component) {
  _inherits(AccountPage, _React$Component);

  var _super = _createSuper(AccountPage);

  function AccountPage(props) {
    var _this;

    _classCallCheck(this, AccountPage);

    _this = _super.call(this, props);
    _this.delete = _this.delete.bind(_assertThisInitialized(_this));
    _this.valueChanged = _this.valueChanged.bind(_assertThisInitialized(_this));
    _this.updateState = _this.updateState.bind(_assertThisInitialized(_this));
    _this.changePassword = _this.changePassword.bind(_assertThisInitialized(_this));
    _this.updateInformation = _this.updateInformation.bind(_assertThisInitialized(_this));
    _this.logOut = _this.logOut.bind(_assertThisInitialized(_this));
    _this.getInformation = _this.getInformation.bind(_assertThisInitialized(_this));
    _this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      relationship: "",
      prefix: "Prefix",
      oldPassword: "",
      newPassword1: "",
      newPassword2: "",
      error: "",
      success: false
    };

    _this.getInformation(); //load in parent information in the beginning


    return _this;
  } //logging out a user


  _createClass(AccountPage, [{
    key: "logOut",
    value: function logOut() {
      window.localStorage.clear();
      sessionStorage.clear();
      location.reload();
    } //deleting a user

  }, {
    key: "delete",
    value: function _delete() {
      var _this2 = this;

      if (confirm("Are you sure you want to delete this account?")) {
        networkRequest("parent/delete", "DELETE", {}, function (d) {
          if (!d.success) {
            alert("error");
            alert(d.message);
          } else {
            _this2.logOut();
          }
        });
      }
    } //used in input fields

  }, {
    key: "valueChanged",
    value: function valueChanged(e) {
      this.updateState(e.target.name, e.target.value);
    }
  }, {
    key: "updateState",
    value: function updateState(key, val) {
      this.state[key] = val;
      this.setState(this.state);
    } //gets a parent's information

  }, {
    key: "getInformation",
    value: function getInformation() {
      var _this3 = this;

      networkRequest("parent/getParent", "POST", {}, function (d) {
        if (d.success) {
          _this3.state["firstname"] = d.parent.firstName;
          _this3.state["lastname"] = d.parent.lastName;
          _this3.state["prefix"] = d.parent.prefix;
          _this3.state["relationship"] = d.parent.relationship;
          _this3.state["phone"] = d.parent.phone;
          _this3.state["email"] = d.parent.email;

          _this3.setState(_this3.state);
        } else {
          _this3.logOut();
        }
      });
    } //update a parent's information

  }, {
    key: "updateInformation",
    value: function updateInformation() {
      var _this4 = this;

      var capitalize = function capitalize(s) {
        if (typeof s !== 'string') return '';
        return s.charAt(0).toUpperCase() + s.slice(1);
      };

      networkRequest("parent/updateParent", "POST", {
        firstName: capitalize(this.state.firstname.toLowerCase()),
        lastName: capitalize(this.state.lastname.toLowerCase()),
        prefix: this.state.prefix,
        phone: this.state.phone,
        relationship: this.state.relationship,
        email: this.state.email
      }, function (d) {
        _this4.getInformation();

        _this4.state["error"] = d.message;
        _this4.state["success"] = d.success;

        _this4.setState(_this4.state);

        setTimeout(function () {
          _this4.state["error"] = "";
          _this4.state["success"] = false;

          _this4.setState(_this4.state);
        }, 3000);
      });
    } //change parent password

  }, {
    key: "changePassword",
    value: function changePassword() {
      var _this5 = this;

      if (this.state.newPassword1 == this.state.newPassword2) {
        networkRequest("parent/updatePassword", "POST", {
          oldPassword: this.state.oldPassword,
          newPassword: this.state.newPassword1
        }, function (d) {
          _this5.state["error"] = d.message;
          _this5.state["success"] = d.success;

          _this5.setState(_this5.state);

          setTimeout(function () {
            _this5.state["error"] = "";
            _this5.state["success"] = false;

            _this5.setState(_this5.state);
          }, 3000);
        });
      } else {
        this.state["error"] = "The passwords do not match. Please try again.";
        this.state["success"] = false;
        this.setState(this.state);
        setTimeout(function () {
          _this5.state["error"] = "";
          _this5.state["success"] = false;

          _this5.setState(_this5.state);
        }, 3000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var divStyle = {
        height: "100%",
        width: "100%",
        textAlign: "center"
      };
      var contentDivStyle = {
        width: "90%",
        margin: "auto"
      };
      var headerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px"
      };
      var titleStyle = {
        margin: "10px"
      };
      var inputStyle = {
        borderRadius: "27px",
        border: "2px solid rgba(8,58,174,1)",
        padding: "10px 20px",
        width: "20%",
        height: "30px",
        outline: "none",
        fontSize: "20px",
        marginTop: "20px"
      };
      var selectStyle = {
        borderRadius: "27px",
        border: "2px solid rgba(8,58,174,1)",
        padding: "10px 20px",
        // width: "20%",
        // height: "30px",
        outline: "none",
        fontSize: "20px",
        marginTop: "20px"
      };
      var buttonStyle = {
        borderRadius: "27px",
        border: "2px solid rgba(8,58,174,1)",
        padding: "5px 5px",
        width: "20%",
        height: "44px",
        outline: "none",
        fontSize: "20px",
        backgroundColor: "#083ab9",
        color: "white",
        marginTop: "15px",
        cursor: "pointer"
      };
      var buttonStyle2 = {
        borderRadius: "27px",
        border: "2px solid #CC0000",
        padding: "5px 5px",
        width: "20%",
        height: "44px",
        outline: "none",
        fontSize: "20px",
        backgroundColor: appRed,
        color: "white",
        marginTop: "15px",
        cursor: "pointer"
      };

      if (window.screen.width < mobileThreshold) {
        divStyle = {
          height: "100%",
          width: "100%",
          textAlign: "center"
        };
        contentDivStyle = {
          width: "90%",
          margin: "auto"
        };
        headerStyle = {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px"
        };
        titleStyle = {
          margin: "10px"
        };
        inputStyle = {
          borderRadius: "17px",
          border: "2px solid rgba(8,58,174,1)",
          padding: "10px 10px",
          width: "70%",
          height: "15px",
          outline: "none",
          fontSize: "12px",
          marginTop: "20px"
        };
        selectStyle = {
          borderRadius: "17px",
          border: "2px solid rgba(8,58,174,1)",
          padding: "10px 10px",
          // width: "20%",
          // height: "30px",
          outline: "none",
          fontSize: "15px",
          marginTop: "20px"
        };
        buttonStyle = {
          borderRadius: "17px",
          border: "2px solid rgba(8,58,174,1)",
          padding: "5px 5px",
          width: "70%",
          height: "30px",
          outline: "none",
          fontSize: "15px",
          backgroundColor: "#083ab9",
          color: "white",
          marginTop: "15px",
          cursor: "pointer"
        };
        buttonStyle2 = {
          borderRadius: "17px",
          border: "2px solid #CC0000",
          padding: "5px 5px",
          width: "70%",
          height: "30px",
          outline: "none",
          fontSize: "15px",
          backgroundColor: appRed,
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
          width: "100%",
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
        style: divStyle
      }, errorBox, /*#__PURE__*/React.createElement("div", {
        style: contentDivStyle
      }, /*#__PURE__*/React.createElement("div", {
        style: headerStyle
      }, /*#__PURE__*/React.createElement("h1", {
        style: titleStyle
      }, "Parent Account")), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("input", {
        style: inputStyle,
        type: "text",
        placeholder: "First Name",
        name: "firstname",
        value: this.state.firstname,
        onChange: this.valueChanged
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        style: inputStyle,
        type: "text",
        placeholder: "Last Name",
        name: "lastname",
        value: this.state.lastname,
        onChange: this.valueChanged
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
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
      }, "Ms")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
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
      }, "Other")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        style: inputStyle,
        type: "tel",
        placeholder: "Phone",
        name: "phone",
        value: this.state.phone,
        onChange: this.valueChanged
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        style: inputStyle,
        type: "email",
        placeholder: "Email",
        name: "email",
        value: this.state.email,
        onChange: this.valueChanged
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
        style: buttonStyle,
        onClick: this.updateInformation
      }, "Update"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
        style: buttonStyle,
        onClick: this.getInformation
      }, "Refresh"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
        style: headerStyle
      }, /*#__PURE__*/React.createElement("h1", {
        style: titleStyle
      }, "Password")), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("input", {
        style: inputStyle,
        type: "password",
        placeholder: "Old Password",
        name: "oldPassword",
        value: this.state.oldPassword,
        onChange: this.valueChanged
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        style: inputStyle,
        type: "password",
        placeholder: "New Password",
        name: "newPassword1",
        value: this.state.newPassword1,
        onChange: this.valueChanged
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        style: inputStyle,
        type: "password",
        placeholder: "Re-enter New Password",
        name: "newPassword2",
        value: this.state.newPassword2,
        onChange: this.valueChanged
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
        style: buttonStyle,
        onClick: this.changePassword
      }, "Update"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
        style: buttonStyle2,
        onClick: this.delete
      }, "Delete Account"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)));
    }
  }]);

  return AccountPage;
}(React.Component);