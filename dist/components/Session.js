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

var Session = /*#__PURE__*/function (_React$Component) {
  _inherits(Session, _React$Component);

  var _super = _createSuper(Session);

  function Session(props) {
    var _this;

    _classCallCheck(this, Session);

    _this = _super.call(this, props);
    _this.getKids = _this.getKids.bind(_assertThisInitialized(_this));
    _this.checkStudent = _this.checkStudent.bind(_assertThisInitialized(_this));
    _this.state = {
      session: _this.props.session,
      kids: [],
      selectedKidId: "",
      selectedKid: -1,
      //index for selected kid
      buttonState: 0,
      error: "",
      kidSection: "" //section the selected kid belongs to 
      //button state options
      //1 - can register
      //2 - waitlist
      //3 - already registered or not open

    };

    _this.getKids();

    return _this;
  }

  _createClass(Session, [{
    key: "getKids",
    value: function getKids() {
      var _this2 = this;

      networkRequest("parent/getKids", "POST", {}, function (d) {
        if (!d.success) {
          alert("Error! Please refresh the page and try again.");
        } else {
          _this2.setState({
            session: _this2.state.session,
            kids: d.kids,
            selectedKidName: _this2.state.selectedKidName,
            buttonState: _this2.state.buttonState,
            selectedKid: _this2.state.selectedKid,
            error: _this2.state.error,
            kidSection: _this2.state.kidSection
          });
        }
      });
    }
  }, {
    key: "checkStudent",
    value: function checkStudent(e) {
      var _this3 = this;

      var index = -1;

      for (var i = 0; i < this.state.kids.length; i++) {
        if (this.state.kids[i]['_id'] == String(e.target.value)) {
          index = i;
          break;
        }
      }

      this.setState({
        session: this.state.session,
        kids: this.state.kids,
        selectedKid: index,
        selectedKidId: String(e.target.value),
        buttonState: this.state.buttonState,
        error: "",
        kidSection: this.state.kidSection
      }); //check if the kid is good

      networkRequest("parent/checkEligibility", "POST", {
        childData: this.state.kids[index],
        sessionData: this.state.session,
        id: this.state.kids[index]._id
      }, function (d) {
        if (!d.success) {
          alert("Error! Please refresh the page and try again.");
        } else {
          _this3.setState({
            session: _this3.state.session,
            kids: _this3.state.kids,
            selectedKid: _this3.state.selectedKid,
            selectedKidId: _this3.state.selectedKidId,
            buttonState: d.state,
            error: d.message,
            kidSection: d.section
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var session = this.state.session;
      var divStyle = {
        margin: "auto",
        width: '50%',
        textAlign: "center"
      };
      var selectStyle = {
        width: "206px",
        fontSize: "18px"
      };
      var headerStyle = {
        textDecoration: "underline"
      };
      var dropDown = null;
      var options = [];
      var infoStyle = {
        fontStyle: 'italic',
        fontSize: '25px'
      };

      if (this.state.kids.length == 0) {
        dropDown = /*#__PURE__*/React.createElement("p", {
          style: infoStyle
        }, "Please click the ", /*#__PURE__*/React.createElement("b", null, "Children"), " tab at the top of the screen to add a child.");
      } else {
        this.state.kids.forEach(function (o) {
          options.push( /*#__PURE__*/React.createElement("option", {
            key: o._id,
            value: o._id
          }, o.firstName));
        });
        dropDown = /*#__PURE__*/React.createElement("select", {
          style: selectStyle,
          value: this.state.selectedKidId,
          onChange: this.checkStudent
        }, /*#__PURE__*/React.createElement("option", {
          value: "",
          defaultValue: true,
          hidden: true
        }, "Select Child"), options);
      }

      var redStyle = {
        color: appRed
      };
      var buttonStyle = {
        borderRadius: "27px",
        border: "2px solid rgba(8,58,174,1)",
        padding: "5px 5px",
        width: "200px",
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
        border: "2px solid #D3D3D3",
        padding: "5px 5px",
        width: "200px",
        height: "44px",
        outline: "none",
        fontSize: "20px",
        backgroundColor: "#D3D3D3",
        color: "white",
        marginTop: "15px",
        cursor: "pointer"
      };

      if (window.screen.width < mobileThreshold) {
        var buttonStyle = {
          borderRadius: "27px",
          border: "2px solid rgba(8,58,174,1)",
          padding: "5px 5px",
          width: "50vw",
          height: "30px",
          outline: "none",
          fontSize: "15px",
          backgroundColor: "#083ab9",
          color: "white",
          marginTop: "15px",
          cursor: "pointer"
        };
        var buttonStyle2 = {
          borderRadius: "27px",
          border: "2px solid #D3D3D3",
          padding: "5px 5px",
          width: "50vw",
          height: "30px",
          outline: "none",
          fontSize: "15px",
          backgroundColor: "#D3D3D3",
          color: "white",
          marginTop: "15px",
          cursor: "pointer"
        };
      }

      var registerButton = null;

      if (this.state.buttonState == 1) {
        registerButton = /*#__PURE__*/React.createElement("button", {
          style: buttonStyle,
          onClick: function onClick() {
            return _this4.props.changePage(1, _this4.state.kids[_this4.state.selectedKid], _this4.state.session, _this4.state.kidSection);
          }
        }, "Register for ", this.state.kidSection);
      } else if (this.state.buttonState == 2) {
        registerButton = /*#__PURE__*/React.createElement("button", {
          style: buttonStyle,
          onClick: function onClick() {
            return _this4.props.changePage(1, _this4.state.kids[_this4.state.selectedKid], _this4.state.session, _this4.state.kidSection);
          }
        }, "Waitlist for ", this.state.kidSection);
      } else if (this.state.buttonState == 3) {
        registerButton = /*#__PURE__*/React.createElement("button", {
          style: buttonStyle2
        }, "Closed");
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

      return /*#__PURE__*/React.createElement("div", {
        style: divStyle
      }, /*#__PURE__*/React.createElement("h2", {
        style: headerStyle
      }, session.Display + " Session"), /*#__PURE__*/React.createElement("h3", null, "Time: " + (session.ELearn == 0 ? "4:30PM - 5:30PM" : "All Day")), /*#__PURE__*/React.createElement("h3", {
        style: redStyle
      }, session.OpenDate), /*#__PURE__*/React.createElement(Calendar, {
        key: this.props.session.Name,
        dates: this.props.session.Dates
      }), this.props.session.Open ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Please select the child that you wish to register."), dropDown) : /*#__PURE__*/React.createElement("h4", null, "This session is not accepting any more registrations."), registerButton, errorMessage);
    }
  }]);

  return Session;
}(React.Component);