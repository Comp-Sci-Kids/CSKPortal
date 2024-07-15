"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var IconButton = /*#__PURE__*/function (_React$Component) {
  _inherits(IconButton, _React$Component);

  var _super = _createSuper(IconButton);

  function IconButton(props) {
    _classCallCheck(this, IconButton);

    return _super.call(this, props);
  }

  _createClass(IconButton, [{
    key: "render",
    value: function render() {
      var _imageButtonStyle;

      var imageButtonStyle = (_imageButtonStyle = {
        width: this.props.small ? "40px" : "40px",
        height: this.props.small ? "40px" : "40px",
        padding: this.props.small ? "0px" : "0px",
        boxSizing: "border-box",
        borderRadius: this.props.small ? "4px" : "10px",
        display: "inline-block",
        marginLeft: this.props.small ? "2px" : "5px",
        cursor: "pointer"
      }, _defineProperty(_imageButtonStyle, "width", this.props.menu == "menu" ? "75px" : "40px"), _defineProperty(_imageButtonStyle, "height", this.props.menu == "menu" ? "75px" : "40px"), _imageButtonStyle);
      var imageStyle = {
        maxWidth: "100%",
        filter: "invert(100%)",
        userSelect: "none",
        width: this.props.menu == "menu" ? "75px" : "40px",
        height: this.props.menu == "menu" ? "75px" : "40px"
      };
      return /*#__PURE__*/React.createElement("div", {
        style: imageButtonStyle,
        onClick: this.props.disabled ? null : this.props.onClick
      }, /*#__PURE__*/React.createElement("img", {
        style: imageStyle,
        src: this.props.src
      }));
    }
  }]);

  return IconButton;
}(React.Component);