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

var ChildPage = /*#__PURE__*/function (_React$Component) {
  _inherits(ChildPage, _React$Component);

  var _super = _createSuper(ChildPage);

  function ChildPage(props) {
    var _this;

    _classCallCheck(this, ChildPage);

    _this = _super.call(this, props);
    _this.openPopup = _this.openPopup.bind(_assertThisInitialized(_this));
    _this.valueChanged = _this.valueChanged.bind(_assertThisInitialized(_this));
    _this.updateState = _this.updateState.bind(_assertThisInitialized(_this));
    _this.closePopup = _this.closePopup.bind(_assertThisInitialized(_this));
    _this.refreshPage = _this.refreshPage.bind(_assertThisInitialized(_this));
    _this.state = {
      popup: false,
      kids: []
    };

    _this.refreshPage();

    return _this;
  }

  _createClass(ChildPage, [{
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
    key: "openPopup",
    value: function openPopup() {
      this.updateState("popup", true);
    }
  }, {
    key: "refreshPage",
    value: function refreshPage() {
      var _this2 = this;

      networkRequest("parent/getKids", "POST", {}, function (d) {
        if (!d.success) {
          alert("Error! Please refresh the page and try again.");
        } else {
          // console.log(d.kids);
          _this2.setState({
            popup: false,
            kids: d.kids
          });
        }
      });
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      this.updateState("popup", false);
      this.refreshPage();
    }
  }, {
    key: "render",
    value: function render() {
      var divStyle = {
        height: "100%",
        width: "100%"
      };
      var contentDivStyle = {
        width: "90%",
        margin: "auto"
      };
      var headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "30px"
      };
      var titleStyle = {
        margin: "10px",
        fontFamily: "brandFont",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px"
      };
      var popup = null;

      if (this.state.popup) {
        var sampleKid = {
          firstName: "",
          lastName: "",
          gender: "",
          dob: "",
          grade: "",
          shirtSize: "",
          emergencyName: "",
          emergencyPrefix: "",
          emergencyRelationship: "",
          emergencyPhone: ""
        };

        if (this.state.kids.length > 0) {
          sampleKid = this.state.kids[this.state.kids.length - 1];
        }

        popup = /*#__PURE__*/React.createElement(AddChildPopup, {
          sampleKid: sampleKid,
          closeCallback: this.closePopup
        });
      }

      var infoStyle = {
        fontStyle: 'italic',
        fontSize: '25px',
        fontFamily: "brandFont"
      };
      return /*#__PURE__*/React.createElement("div", {
        style: divStyle
      }, /*#__PURE__*/React.createElement("div", {
        style: contentDivStyle,
        class: "background-red"
      }, /*#__PURE__*/React.createElement("div", {
        style: headerStyle
      }, /*#__PURE__*/React.createElement("h1", {
        style: titleStyle
      }, "Child Information"), /*#__PURE__*/React.createElement(IconButton, {
        src: "images/add.png",
        onClick: this.openPopup
      })), /*#__PURE__*/React.createElement("hr", null), this.state.kids.length > 0 ? /*#__PURE__*/React.createElement(ChildTable, {
        kids: this.state.kids,
        refreshCallback: this.refreshPage
      }) : /*#__PURE__*/React.createElement("p", {
        style: infoStyle
      }, "Please click the button in the top right of the screen to add a child.")), popup);
    }
  }]);

  return ChildPage;
}(React.Component);