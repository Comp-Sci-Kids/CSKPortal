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

var ChildRow = /*#__PURE__*/function (_React$Component) {
  _inherits(ChildRow, _React$Component);

  var _super = _createSuper(ChildRow);

  function ChildRow(props) {
    var _this;

    _classCallCheck(this, ChildRow);

    _this = _super.call(this, props);
    _this.openChildRowPopup = _this.openChildRowPopup.bind(_assertThisInitialized(_this));
    _this.sessionSelect = React.createRef();
    _this.sectionSelect = React.createRef();
    _this.state = {
      latestSession: "",
      latestSessionState: ""
    };
    return _this;
  }

  _createClass(ChildRow, [{
    key: "openChildRowPopup",
    value: function openChildRowPopup() {
      this.updateState("popup", true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var shirtSize = "";
      var shirtOptions = [{
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
      }];

      for (var i = 0; i < shirtOptions.length; i++) {
        if (shirtOptions[i].value == this.props.kid.shirtSize) {
          shirtSize = shirtOptions[i].display;
          break;
        }
      }

      var grade = "";
      var gradeOptions = [{
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
      }];

      for (var i = 0; i < gradeOptions.length; i++) {
        if (gradeOptions[i].value == this.props.kid.grade) {
          grade = gradeOptions[i].display;
          break;
        }
      }

      var pastSessions = [];

      for (var i = 0; i < this.props.kid.sessions.old.length; i++) {
        var sessionData = this.props.kid.sessions.old[i];
        var text = "";
        text += sessionData.sessionName + ", " + sessionData.section;

        if (sessionData.waitlist) {
          text += " Waitlist";
        } else if (sessionData.advanced == 2) {
          if (sessionData.section[3] == "A") {
            text = text.substring(0, text.length - 1) + "C";
          } else {
            text += " C";
          }
        } else if (sessionData.advanced == 1) {
          if (sessionData.section[3] == "A") {
            text = text.substring(0, text.length - 1) + "B";
          } else {
            text += " B";
          }
        } else {
          if (sessionData.section[3] == "A") {
            text = text.substring(0, text.length - 1) + "A";
          } else {
            text += " A";
          }
        } //console.log(text)


        pastSessions.push( /*#__PURE__*/React.createElement("li", {
          key: i
        }, text));
      }

      if (pastSessions.length == 0) {
        pastSessions.push( /*#__PURE__*/React.createElement("p", {
          key: i
        }, "None"));
      }

      var currentSessions = [];

      for (var i = 0; i < this.props.kid.sessions.current.length; i++) {
        var sessionData = this.props.kid.sessions.current[i];
        var text = ""; // console.log(this.props.kid)

        text += sessionData.sessionName + ", " + sessionData.section;

        if (sessionData.waitlist) {
          text += " Waitlist";
        } else if (sessionData.advanced == 2) {
          if (sessionData.section[3] == "A") {
            text = text.substring(0, text.length - 1) + "C";
          } else {
            text += " C";
          }
        } else if (sessionData.advanced == 1) {
          if (sessionData.section[3] == "A") {
            text = text.substring(0, text.length - 1) + "B";
          } else {
            text += " B";
          }
        } else {
          if (sessionData.section[3] == "A") {
            text = text.substring(0, text.length - 1) + "A";
          } else {
            text += " A";
          }
        }

        currentSessions.push( /*#__PURE__*/React.createElement("li", {
          key: i
        }, text));
      }

      if (currentSessions.length == 0) {
        currentSessions.push( /*#__PURE__*/React.createElement("p", {
          key: i
        }, "None"));
      }

      if (window.screen.width >= 760) {
        return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, this.props.kid.firstName), /*#__PURE__*/React.createElement("td", null, this.props.kid.lastName), /*#__PURE__*/React.createElement("td", null, grade), /*#__PURE__*/React.createElement("td", null, this.props.kid.birthday), /*#__PURE__*/React.createElement("td", null, shirtSize), /*#__PURE__*/React.createElement("td", null, currentSessions), /*#__PURE__*/React.createElement("td", null, pastSessions), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(IconButton, {
          src: "images/edit.png",
          small: true,
          onClick: function onClick() {
            _this2.props.popup(_this2.props.kid);
          }
        })));
      } else {
        return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, this.props.kid.firstName, " ", this.props.kid.lastName), /*#__PURE__*/React.createElement("td", null, currentSessions), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(IconButton, {
          src: "images/edit.png",
          small: true,
          onClick: function onClick() {
            _this2.props.popup(_this2.props.kid);
          }
        })));
      }
    }
  }]);

  return ChildRow;
}(React.Component);