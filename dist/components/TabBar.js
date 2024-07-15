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

var SlidingMenu = /*#__PURE__*/function (_React$Component) {
  _inherits(SlidingMenu, _React$Component);

  var _super = _createSuper(SlidingMenu);

  function SlidingMenu(props) {
    _classCallCheck(this, SlidingMenu);

    return _super.call(this, props);
  }

  _createClass(SlidingMenu, [{
    key: "render",
    value: function render() {
      var buttonStyle = {
        flexDirection: "column",
        borderLeft: "solid 1px",
        width: "50%",
        paddingLeft: "50px",
        boxSizing: "border-box"
      };
      return /*#__PURE__*/React.createElement("div", {
        className: "sliding-menu animated " + this.props.slideClass
      }, /*#__PURE__*/React.createElement(IconButton, {
        style: buttonStyle,
        src: "images/close.png",
        onClick: this.props.onClick
      }), this.props.children);
    }
  }]);

  return SlidingMenu;
}(React.Component);

var TabBar = /*#__PURE__*/function (_React$Component2) {
  _inherits(TabBar, _React$Component2);

  var _super2 = _createSuper(TabBar);

  function TabBar(props) {
    var _this;

    _classCallCheck(this, TabBar);

    _this = _super2.call(this, props);
    _this.changeTab = _this.changeTab.bind(_assertThisInitialized(_this));
    _this.state = {
      selectedTab: _this.props.defaultPage,
      toggleMenu: false
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TabBar, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        toggleMenu: !this.state.toggleMenu
      });
    }
  }, {
    key: "changeTab",
    value: function changeTab(index) {
      this.setState({
        selectedTab: index
      });
      this.props.tabChanged(index);
      this.setState({
        toggleMenu: !this.state.toggleMenu
      });
    }
  }, {
    key: "render",
    value: function render() {
      var slideClass;
      this.state.toggleMenu ? slideClass = 'slideInLeft slide-menu' : slideClass = 'slideInRight';
      var tabNames = ["Register", "Children", "Account"];
      var tabs = [];

      for (var i = 0; i < tabNames.length; i++) {
        tabs.push( /*#__PURE__*/React.createElement(Tab, {
          key: i,
          class: "active",
          index: i,
          title: tabNames[i],
          selected: i == this.state.selectedTab,
          callback: this.changeTab,
          left: i == 0,
          right: i == tabNames.length - 1
        }));
      }

      var barStyle = {
        flexDirection: "column",
        borderLeft: "solid 1px",
        width: "100%",
        // paddingTop: "50px",
        paddingLeft: "50px",
        boxSizing: "border-box"
      };
      return /*#__PURE__*/React.createElement("div", {
        style: barStyle
      }, /*#__PURE__*/React.createElement(IconButton, {
        src: "images/menu2.png",
        onClick: this.handleClick,
        menu: "menu"
      }), /*#__PURE__*/React.createElement(SlidingMenu, {
        slideClass: slideClass,
        onClick: this.handleClick
      }, tabs));
    }
  }]);

  return TabBar;
}(React.Component);