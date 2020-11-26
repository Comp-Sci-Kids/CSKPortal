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

var EditChildPopup = /*#__PURE__*/function (_React$Component) {
  _inherits(EditChildPopup, _React$Component);

  var _super = _createSuper(EditChildPopup);

  function EditChildPopup(props) {
    var _this;

    _classCallCheck(this, EditChildPopup);

    _this = _super.call(this, props);
    _this.valueChanged = _this.valueChanged.bind(_assertThisInitialized(_this));
    _this.updateState = _this.updateState.bind(_assertThisInitialized(_this));
    _this.deleteAccount = _this.deleteAccount.bind(_assertThisInitialized(_this));
    _this.updateChild = _this.updateChild.bind(_assertThisInitialized(_this));
    _this.state = {
      id: _this.props.sampleKid._id,
      firstName: _this.props.sampleKid.firstName,
      lastName: _this.props.sampleKid.lastName,
      gender: _this.props.sampleKid.gender,
      dob: _this.props.sampleKid.birthday,
      grade: _this.props.sampleKid.grade,
      shirtSize: _this.props.sampleKid.shirtSize,
      school: _this.props.sampleKid.school,
      emergencyName: _this.props.sampleKid.emergencyName,
      emergencyPrefix: _this.props.sampleKid.emergencyPrefix,
      emergencyRelationship: _this.props.sampleKid.emergencyRelationship,
      emergencyPhone: _this.props.sampleKid.emergencyPhone,
      error: ""
    };

    _this.refreshPage();

    return _this;
  }

  _createClass(EditChildPopup, [{
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
    key: "refreshPage",
    value: function refreshPage() {
      var _this2 = this;

      networkRequest("parent/getKids", "POST", {}, function (d) {
        if (!d.success) {
          alert("Error! Please refresh the page and try again.");
        } else {
          _this2.setState({
            popup: false,
            kids: d.kids
          });
        }
      });
    }
  }, {
    key: "updateChild",
    value: function updateChild() {
      var _this3 = this;

      if (this.state.emergencyPrefix == "" || this.state.emergencyName == "" || this.state.emergencyRelationship == "" || this.state.emergencyPhone == "" || this.state.firstName == "" || this.state.lastName == "" || this.state.gender == "" || this.state.dob == "" || this.state.school == "" || this.state.grade == "" || this.state.shirtSize == "") {
        alert("You are missing some information."); // this.updateState("error", "You are missing some information.")

        return;
      }

      var dob = this.state.dob;

      if (dob.length != 10) {
        alert("Please enter the birthday in MM/DD/YYYY format."); // this.updateState("error", "Please enter the birthday in MM/DD/YYYY format.")

        return;
      } else if (dob[2] != "/" || dob[5] != "/") {
        alert("Please enter the birthday in MM/DD/YYYY format."); // this.updateState("error", "Please enter the birthday in MM/DD/YYYY format.")

        return;
      }

      var capitalize = function capitalize(s) {
        if (typeof s !== 'string') return '';
        return s.charAt(0).toUpperCase() + s.slice(1);
      };

      networkRequest("parent/updateKid", "POST", {
        id: this.state.id,
        firstName: capitalize(this.state.firstName.toLowerCase()),
        lastName: capitalize(this.state.lastName.toLowerCase()),
        gender: this.state.gender,
        birthday: this.state.dob,
        grade: this.state.grade,
        school: this.state.school,
        shirtSize: this.state.shirtSize,
        emergencyName: this.state.emergencyName,
        emergencyPrefix: this.state.emergencyPrefix,
        emergencyRelationship: this.state.emergencyRelationship,
        emergencyPhone: this.state.emergencyPhone,
        sessionName: this.props.sampleKid.sessionName
      }, function (d) {
        if (!d.success) {
          alert(d.message); // this.updateState("error", d.message);
        } else {
          _this3.props.closeCallback();
        }
      });
    }
  }, {
    key: "deleteAccount",
    value: function deleteAccount() {
      var _this4 = this;

      if (confirm("Are you sure you want to delete this account?")) {
        networkRequest("parent/deleteKid", "POST", {
          id: this.state.id
        }, function (d) {
          if (!d.success) {
            alert(d.message); // this.updateState("error", d.message)
          } else {
            _this4.props.closeCallback();

            _this4.props.refreshCallback();
          }
        });
      }
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
        zIndex: 1
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
        position: "relative"
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

      if (window.screen.width < mobileThreshold) {
        popupStyle = {
          position: "fixed",
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center" //    overflowY: 'scroll',

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
          position: "relative" //    overflowY: 'scroll',

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
          fontWeight: "bold"
        };
        inputStyle = {
          height: "15px",
          fontSize: "10px",
          width: "100px"
        };
        headerStyle = {
          fontSize: "22px"
        };
      } //error message


      var errorMessage = null;

      if (this.state.error != "") {
        var errorStyle = {
          color: this.state.error ? "red" : "green",
          fontSize: "18px",
          textAlign: "center",
          fontWeight: "bold"
        }; // alert(this.state.error)

        errorMessage = /*#__PURE__*/React.createElement("p", {
          style: errorStyle
        }, this.state.error);
      }

      var hrStyle = {
        border: '5px dotted ' + appBlue,
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
      }, /*#__PURE__*/React.createElement("h1", {
        style: headerStyle
      }, "Edit Account"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(LabelField, {
        title: "First Name",
        field: "firstName",
        value: this.state.firstName,
        editing: false,
        valueChanged: this.updateState
      }), /*#__PURE__*/React.createElement(LabelField, {
        title: "Last Name",
        field: "lastName",
        value: this.state.lastName,
        editing: false,
        valueChanged: this.updateState
      }), /*#__PURE__*/React.createElement(SelectField, {
        title: "Gender",
        field: "gender",
        value: this.state.gender,
        editing: true,
        valueChanged: this.updateState,
        options: [{
          value: "male",
          display: "Male"
        }, {
          value: "female",
          display: "Female"
        }, {
          value: "other",
          display: "Other"
        }]
      }), /*#__PURE__*/React.createElement(LabelField, {
        title: "Birthday (MM/DD/YYYY)",
        field: "dob",
        value: this.state.dob,
        editing: false,
        valueChanged: this.updateState
      }), /*#__PURE__*/React.createElement(SelectField, {
        title: "Grade",
        field: "grade",
        value: this.state.grade,
        editing: true,
        valueChanged: this.updateState,
        options: [{
          value: 1,
          display: "1st"
        }, {
          value: 2,
          display: "2nd"
        }, {
          value: 3,
          display: "3rd"
        }, {
          value: 4,
          display: "4th"
        }, {
          value: 5,
          display: "5th"
        }, {
          value: 6,
          display: "6th"
        }, {
          value: 7,
          display: "7th"
        }, {
          value: 8,
          display: "8th"
        }]
      }), /*#__PURE__*/React.createElement(LabelField, {
        title: "School",
        field: "school",
        value: this.state.school,
        editing: true,
        valueChanged: this.updateState
      }), /*#__PURE__*/React.createElement(SelectField, {
        title: "Shirt Size",
        field: "shirtSize",
        value: this.state.shirtSize,
        editing: true,
        valueChanged: this.updateState,
        options: [{
          value: "ys",
          display: "Youth Small"
        }, {
          value: "ym",
          display: "Youth Medium"
        }, {
          value: "yl",
          display: "Youth Large"
        }, {
          value: "as",
          display: "Adult Small"
        }, {
          value: "am",
          display: "Adult Medium"
        }, {
          value: "al",
          display: "Adult Large"
        }, {
          value: "ax",
          display: "Adult X-Large"
        }]
      }), /*#__PURE__*/React.createElement("hr", {
        style: hrStyle
      }), /*#__PURE__*/React.createElement(LabelField, {
        title: "Emergency Contact Name",
        field: "emergencyName",
        value: this.state.emergencyName,
        editing: true,
        valueChanged: this.updateState
      }), /*#__PURE__*/React.createElement(SelectField, {
        title: "Emergency Contact Prefix",
        field: "emergencyPrefix",
        value: this.state.emergencyPrefix,
        editing: true,
        valueChanged: this.updateState,
        options: [{
          value: "Mr",
          display: "Mr"
        }, {
          value: "Ms",
          display: "Ms"
        }, {
          value: "Mrs",
          display: "Mrs"
        }]
      }), /*#__PURE__*/React.createElement(LabelField, {
        title: "Emergency Contact Relationship",
        field: "emergencyRelationship",
        value: this.state.emergencyRelationship,
        editing: true,
        valueChanged: this.updateState
      }), /*#__PURE__*/React.createElement(LabelField, {
        title: "Emergency Contact Phone Number",
        field: "emergencyPhone",
        value: this.state.emergencyPhone,
        editing: true,
        valueChanged: this.updateState
      }), errorMessage), /*#__PURE__*/React.createElement("div", {
        style: buttonDivStyle
      }, /*#__PURE__*/React.createElement(IconButton, {
        src: "images/close.png",
        onClick: this.props.closeCallback
      }), /*#__PURE__*/React.createElement(IconButton, {
        src: "images/trash.png",
        onClick: this.deleteAccount
      }), /*#__PURE__*/React.createElement(IconButton, {
        src: "images/done.png",
        onClick: this.updateChild
      }))));
    }
  }]);

  return EditChildPopup;
}(React.Component);