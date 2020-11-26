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

var RegisterKidPage = /*#__PURE__*/function (_React$Component) {
  _inherits(RegisterKidPage, _React$Component);

  var _super = _createSuper(RegisterKidPage);

  function RegisterKidPage(props) {
    var _this;

    _classCallCheck(this, RegisterKidPage);

    _this = _super.call(this, props);
    _this.valueChanged = _this.valueChanged.bind(_assertThisInitialized(_this));
    _this.updateState = _this.updateState.bind(_assertThisInitialized(_this));
    _this.register = _this.register.bind(_assertThisInitialized(_this));
    _this.getParentInformation = _this.getParentInformation.bind(_assertThisInitialized(_this));
    _this.state = {
      sessionName: _this.props.session.Display,
      parentFirstname: "",
      parentLastname: "",
      parentPrefix: "",
      parentRelationship: "",
      parentPhone: "",
      parentEmail: "",
      emergencyName: _this.props.kid.emergencyName,
      emergencyPrefix: _this.props.kid.emergencyPrefix,
      emergencyRelationship: _this.props.kid.emergencyRelationship,
      emergencyPhone: _this.props.kid.emergencyPhone,
      id: _this.props.kid._id,
      firstName: _this.props.kid.firstName,
      lastName: _this.props.kid.lastName,
      gender: _this.props.kid.gender,
      dob: _this.props.kid.birthday,
      grade: _this.props.kid.grade,
      studentSchool: _this.props.kid.school,
      shirtSize: _this.props.kid.shirtSize,
      error: ""
    };

    _this.getParentInformation();

    return _this;
  }

  _createClass(RegisterKidPage, [{
    key: "getParentInformation",
    value: function getParentInformation() {
      var _this2 = this;

      networkRequest("parent/getParent", "POST", {}, function (d) {
        if (d.success) {
          _this2.state["parentFirstname"] = d.parent.firstName;
          _this2.state["parentLastname"] = d.parent.lastName;
          _this2.state["parentRelationship"] = d.parent.relationship;
          _this2.state["parent"] = d.parent.lastName;
          _this2.state["parentPrefix"] = d.parent.prefix;
          _this2.state["parentPhone"] = d.parent.phone;
          _this2.state["parentEmail"] = d.parent.email;

          _this2.setState(_this2.state);
        } else {
          _this2.logOut();
        }
      });
    }
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
    }
  }, {
    key: "register",
    value: function register() {
      var _this3 = this;

      //make sure all fields are filled
      var registrationData = {
        parentPrefix: this.state.parentPrefix,
        parentFirstname: this.state.parentFirstname,
        parentLastname: this.state.parentLastname,
        parentRelationship: this.state.parentRelationship,
        parentPhone: this.state.parentPhone,
        email: this.state.parentEmail,
        emergencyPrefix: this.state.emergencyPrefix,
        emergencyName: this.state.emergencyName,
        emergencyRelationship: this.state.emergencyRelationship,
        emergencyPhone: this.state.emergencyPhone,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        gender: this.state.gender,
        birthday: this.state.dob,
        grade: this.state.grade,
        school: this.state.studentSchool,
        shirtSize: this.state.shirtSize,
        previousSessions: null,
        appliedAdvanced: true,
        session: this.props.session.Name,
        section: this.props.section,
        childId: this.props.kid._id
      };

      for (var key in registrationData) {
        if (registrationData[key] == "" && key !== 'school') {
          this.updateState("error", "Please fill all of the Fields.");
          return;
        }
      }

      var dob = registrationData.birthday;

      if (dob.length != 10) {
        this.updateState("error", "Please enter the birthday in MM/DD/YYYY format.");
        return;
      } else if (dob[2] != "/" || dob[5] != "/") {
        this.updateState("error", "Please enter the birthday in MM/DD/YYYY format.");
        return;
      }

      if (confirm("Are you sure that you want to register your child?")) {
        networkRequest("parent/register", "POST", registrationData, function (d) {
          if (d.success) {
            //TODO: return back to main page
            _this3.props.back(d.message);
          } else {
            _this3.updateState("error", d.message);
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var divStyle = {
        height: "100%",
        width: "100%",
        textAlign: "center"
      };
      var contentDivStyle = {
        width: "50%",
        margin: "auto",
        textAlign: "center"
      };
      var headerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
        flexDirection: "column"
      };
      var titleStyle = {
        margin: "10px"
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
          margin: "auto",
          textAlign: "center"
        };
        headerStyle = {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
          flexDirection: "column"
        };
        titleStyle = {
          margin: "10px"
        };
        buttonStyle = {
          borderRadius: "15px",
          border: "2px solid rgba(8,58,174,1)",
          padding: "5px 5px",
          width: "35vw",
          height: "30px",
          outline: "none",
          fontSize: "15px",
          backgroundColor: "#083ab9",
          color: "white",
          marginTop: "15px",
          cursor: "pointer"
        };
        buttonStyle2 = {
          borderRadius: "15px",
          border: "2px solid #CC0000",
          padding: "5px 5px",
          width: "35vw",
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

      var divStyle2 = {// textAlign: "left"
      };
      return /*#__PURE__*/React.createElement("div", {
        style: divStyle
      }, errorBox, /*#__PURE__*/React.createElement("div", {
        style: contentDivStyle
      }, /*#__PURE__*/React.createElement("div", {
        style: headerStyle
      }, /*#__PURE__*/React.createElement("h1", {
        style: titleStyle
      }, "CompSci Kids ", this.state.sessionName, " Session Registration"), /*#__PURE__*/React.createElement("h1", {
        style: titleStyle
      }, "Section: ", this.props.section), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("p", null, "Registration is on a first come, first serve basis. By registering, you are committing to a ", /*#__PURE__*/React.createElement("b", null, "$20 sign up fee"), " which will be used for a T-shirt and other materials the students will take home. Payment is due by the first day of class and can be paid as a check made out to Conant High School with the memo CompSci Kids given to the Conant High School cashier or brought on the first day of instruction. All teachers are volunteer students. If the fee provides financial hardship to you, please contact ", /*#__PURE__*/React.createElement("a", {
        href: "mailto@cskids211@gmail.com",
        target: "_blank"
      }, "cskids211@gmail.com."), " Any other questions or concerns can also be emailed to ", /*#__PURE__*/React.createElement("a", {
        href: "mailto@cskids211@gmail.com",
        target: "_blank"
      }, "cskids211@gmail.com.")), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h1", null, "Parent Information"), /*#__PURE__*/React.createElement("div", {
        style: divStyle2
      }, /*#__PURE__*/React.createElement(LabelField, {
        title: "Parent First Name",
        field: "parentFirstname",
        value: this.state.parentFirstname,
        editing: true,
        valueChanged: this.updateState
      }), /*#__PURE__*/React.createElement(LabelField, {
        title: "Parent Last Name",
        field: "parentLastname",
        value: this.state.parentLastname,
        editing: true,
        valueChanged: this.updateState
      }), /*#__PURE__*/React.createElement(SelectField, {
        title: "Parent Prefix",
        field: "parentPrefix",
        value: this.state.parentPrefix,
        editing: true,
        valueChanged: this.updateState,
        options: [{
          value: "Mr",
          display: "Mr"
        }, {
          value: "Mrs",
          display: "Mrs"
        }, {
          value: "Ms",
          display: "Ms"
        }]
      }), /*#__PURE__*/React.createElement(SelectField, {
        title: "Parent Relationship",
        field: "parentRelationship",
        value: this.state.parentRelationship,
        editing: true,
        valueChanged: this.updateState,
        options: [{
          value: "Mother",
          display: "Mother"
        }, {
          value: "Father",
          display: "Father"
        }, {
          value: "Other",
          display: "Other"
        }]
      }), /*#__PURE__*/React.createElement(LabelField, {
        title: "Parent Phone Number",
        field: "parentPhone",
        value: this.state.parentPhone,
        editing: true,
        valueChanged: this.updateState
      }), /*#__PURE__*/React.createElement(LabelField, {
        title: "Parent Email",
        field: "parentEmail",
        value: this.state.parentEmail,
        editing: true,
        valueChanged: this.updateState
      })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h1", null, "Emergency Contact"), /*#__PURE__*/React.createElement("div", {
        style: divStyle2
      }, /*#__PURE__*/React.createElement(LabelField, {
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
          value: "Mrs",
          display: "Mrs"
        }, {
          value: "Ms",
          display: "Ms"
        }]
      }), /*#__PURE__*/React.createElement(SelectField, {
        title: "Emergency Contact Relationship",
        field: "emergencyRelationship",
        value: this.state.emergencyRelationship,
        editing: true,
        valueChanged: this.updateState,
        options: [{
          value: "Mother",
          display: "Mother"
        }, {
          value: "Father",
          display: "Father"
        }, {
          value: "Other",
          display: "Other"
        }]
      }), /*#__PURE__*/React.createElement(LabelField, {
        title: "Emergency Contact Phone Number",
        field: "emergencyPhone",
        value: this.state.emergencyPhone,
        editing: true,
        valueChanged: this.updateState
      })), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h1", null, "Student Information"), /*#__PURE__*/React.createElement("div", {
        style: divStyle2
      }, /*#__PURE__*/React.createElement(LabelField, {
        title: "First Name",
        field: "firstName",
        value: this.state.firstName,
        editing: true,
        valueChanged: this.updateState
      }), /*#__PURE__*/React.createElement(LabelField, {
        title: "Last Name",
        field: "lastName",
        value: this.state.lastName,
        editing: true,
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
        editing: true,
        valueChanged: this.updateState
      }), /*#__PURE__*/React.createElement(SelectField, {
        title: "Grade",
        field: "grade",
        value: this.state.grade,
        editing: false,
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
        field: "studentSchool",
        value: this.state.studentSchool,
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
      })), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Please click register if the information above is correct."), /*#__PURE__*/React.createElement("button", {
        style: buttonStyle,
        onClick: this.register
      }, "Register"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
        style: buttonStyle2,
        onClick: function onClick() {
          return _this4.props.back("");
        }
      }, "Back"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)));
    }
  }]);

  return RegisterKidPage;
}(React.Component);