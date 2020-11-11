"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var ChildTable = /*#__PURE__*/function (_React$Component) {
  _inherits(ChildTable, _React$Component);

  var _super = _createSuper(ChildTable);

  function ChildTable(props) {
    var _this;

    _classCallCheck(this, ChildTable);

    _this = _super.call(this, props);
    _this.closePopup = _this.closePopup.bind(_assertThisInitialized(_this));
    _this.editChild = _this.editChild.bind(_assertThisInitialized(_this));
    _this.state = {
      kid: {},
      popupOpen: false
    };
    return _this;
  }

  _createClass(ChildTable, [{
    key: "closePopup",
    value: function closePopup() {
      this.setState({
        kid: {},
        popupOpen: false
      });
      this.props.refreshCallback();
    }
  }, {
    key: "editChild",
    value: function editChild(kid) {
      this.setState({
        kid: kid,
        popupOpen: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var tableStyle = {
        width: "100%",
        cellSpacing: 0,
        cellPadding: 0,
        borderSpacning: 0
      };
      var headStyle = {
        borderBottom: "solid 3px black",
        boxSizing: "border-box"
      }; //this renders each of the rows for an account

      var rows = [];
      this.props.kids.forEach(function (kid) {
        rows.push( /*#__PURE__*/React.createElement(ChildRow, {
          popup: _this2.editChild,
          kid: kid,
          key: kid._id,
          refreshCallback: _this2.props.refreshCallback
        }));
      }); //this is a popup for editing an account info - it only renders when a button gets clicked on

      var popup = null;

      if (this.state.popupOpen) {
        popup = /*#__PURE__*/React.createElement(EditChildPopup, {
          sampleKid: this.state.kid,
          refreshCallback: this.props.refreshCallback,
          name: this.state.name,
          username: this.state.username,
          closeCallback: this.closePopup
        });
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("table", {
        style: tableStyle
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        style: _objectSpread(_objectSpread({}, headStyle), {}, {
          width: "200px"
        })
      }, "First Name"), /*#__PURE__*/React.createElement("td", {
        style: _objectSpread(_objectSpread({}, headStyle), {}, {
          width: "200px"
        })
      }, "Last Name"), /*#__PURE__*/React.createElement("td", {
        style: _objectSpread(_objectSpread({}, headStyle), {}, {
          width: "200px"
        })
      }, "Grade"), /*#__PURE__*/React.createElement("td", {
        style: _objectSpread(_objectSpread({}, headStyle), {}, {
          width: "200px"
        })
      }, "Birthday"), /*#__PURE__*/React.createElement("td", {
        style: _objectSpread(_objectSpread({}, headStyle), {}, {
          width: "200px"
        })
      }, "T-Shirt Size"), /*#__PURE__*/React.createElement("td", {
        style: _objectSpread(_objectSpread({}, headStyle), {}, {
          width: "300px"
        })
      }, "Current Sessions"), /*#__PURE__*/React.createElement("td", {
        style: _objectSpread(_objectSpread({}, headStyle), {}, {
          width: "300px"
        })
      }, "Past Sessions"), /*#__PURE__*/React.createElement("td", {
        style: {
          width: "45px"
        }
      }))), /*#__PURE__*/React.createElement("tbody", null, rows)), popup);
    }
  }]);

  return ChildTable;
}(React.Component);