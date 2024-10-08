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

var Tab = /*#__PURE__*/function (_React$Component) {
  _inherits(Tab, _React$Component);

  var _super = _createSuper(Tab);

  function Tab(props) {
    _classCallCheck(this, Tab);

    return _super.call(this, props);
  }

  _createClass(Tab, [{
    key: "render",
    value: function render() {
      var _this = this;

      var tabStyle = {
        fontFamily: "brandFont",
        // width: "20vw",
        // height: "20px",
        fontSize: "40px",
        // outline: "none",
        borderStyle: "none" // borderWidth: "1px 1px 0 1px",
        // borderColor: "black",
        // color: "black",
        // borderRadius: "15px 15px 0px 0px"

      }; // if(window.screen.width < mobileThreshold) {
      //     tabStyle = {
      //         width: "25vw",
      //         height: "30px",
      //         fontSize: "12px",
      //         outline: "none",
      //         borderStyle: "solid",
      //         borderWidth: "1px 1px 0 1px",
      //         borderColor: "black",
      //         color: "black",
      //         borderRadius: "15px 15px 0px 0px"
      //     }
      // }

      if (this.props.selected) {
        tabStyle.backgroundColor = "#ff0000"; // Set background color to #ff0000 (red)

        tabStyle.color = "white"; // Set text color to white

        tabStyle.border = "2px solid rgba(237, 192, 192, 0.2)"; // Add a 2px solid border with 30% opacity (RGBA)
      } else {
        tabStyle.backgroundColor = appRed; // Use appRed for unselected background

        tabStyle.color = "white"; // Set text color to white

        tabStyle.border = "none"; // Ensure no border when not selected
      }

      return /*#__PURE__*/React.createElement("button", {
        style: tabStyle,
        onClick: function onClick() {
          _this.props.callback(_this.props.index);
        }
      }, this.props.title);
    }
  }]);

  return Tab;
}(React.Component);