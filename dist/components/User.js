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

var User = /*#__PURE__*/function (_React$Component) {
  _inherits(User, _React$Component);

  var _super = _createSuper(User);

  function User(props) {
    var _this;

    _classCallCheck(this, User);

    _this = _super.call(this, props);
    _this.logOut = _this.logOut.bind(_assertThisInitialized(_this));
    _this.state = {
      hidden: true
    };
    return _this;
  }

  _createClass(User, [{
    key: "logOut",
    value: function logOut() {
      sessionStorage.clear();
      window.localStorage.clear();
      location.reload();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var divStyle = {
        position: "relative",
        display: "inline-block",
        marginRight: "2vw" // Use viewport units for margin

      };
      var buttonStyle = {
        backgroundColor: appRed,
        borderRadius: "2vw",
        // Use viewport units for border radius
        border: "0.2vw solid rgba(255,0,0,1)",
        // Use viewport units for border width
        width: "12vw",
        // Use viewport units for width
        height: "4vw",
        // Use viewport units for height
        color: "white",
        // Use viewport units for padding
        fontSize: "1vw",
        // Use viewport units for font size
        outline: "none",
        textAlign: "center",
        cursor: "pointer"
      };
      var dropdownStyle = {
        display: this.state.hidden ? "none" : "block",
        position: "absolute",
        backgroundColor: "#f1f1f1",
        boxShadow: "0px 0.8vw 1.6vw rgba(0,0,0,0.2)",
        // Use viewport units for box shadow
        zIndex: 1,
        right: "1vw",
        // Use viewport units for positioning
        borderRadius: "1vw",
        // Use viewport units for border radius
        border: "0.1vw solid" // Use viewport units for border width

      };
      var linkStyle = {
        color: "black",
        padding: "1vw 1.6vw",
        // Use viewport units for padding
        textDecoration: "none",
        display: "block",
        textAlign: "center",
        fontSize: "1.6vw" // Use viewport units for font size

      };
      return /*#__PURE__*/React.createElement("div", {
        style: divStyle
      }, /*#__PURE__*/React.createElement("button", {
        style: buttonStyle,
        onClick: function onClick() {
          return _this2.setState({
            hidden: !_this2.state.hidden
          });
        }
      }, this.props.name), /*#__PURE__*/React.createElement("div", {
        style: dropdownStyle
      }, /*#__PURE__*/React.createElement("a", {
        href: "",
        style: linkStyle,
        onClick: this.logOut
      }, "Log Out")));
    }
  }]);

  return User;
}(React.Component);