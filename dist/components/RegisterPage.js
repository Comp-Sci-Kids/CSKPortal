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

var RegisterPage = /*#__PURE__*/function (_React$Component) {
  _inherits(RegisterPage, _React$Component);

  var _super = _createSuper(RegisterPage);

  function RegisterPage(props) {
    var _this;

    _classCallCheck(this, RegisterPage);

    _this = _super.call(this, props);
    _this.valueChanged = _this.valueChanged.bind(_assertThisInitialized(_this));
    _this.updateState = _this.updateState.bind(_assertThisInitialized(_this));
    _this.refreshPage = _this.refreshPage.bind(_assertThisInitialized(_this));
    _this.togglePage = _this.togglePage.bind(_assertThisInitialized(_this));
    _this.back = _this.back.bind(_assertThisInitialized(_this));
    _this.state = {
      page: 0,
      sessions: [],
      selectedKid: {},
      session: {},
      selectedKidSection: "",
      message: ""
    };

    _this.refreshPage();

    return _this;
  }

  _createClass(RegisterPage, [{
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
    key: "togglePage",
    value: function togglePage(state, kid, session, section) {
      this.setState({
        page: state,
        sessions: this.state.sessions,
        selectedKid: kid,
        selectedSession: session,
        selectedKidSection: section,
        message: this.state.message
      });
    }
  }, {
    key: "back",
    value: function back(message) {
      var _this2 = this;

      this.setState({
        page: 0,
        sessions: this.state.sessions,
        selectedKid: {},
        selectedSession: {},
        selectedKidSection: "",
        message: message
      });
      setTimeout(function () {
        _this2.state["message"] = "";

        _this2.setState(_this2.state);
      }, 4000);
    }
  }, {
    key: "refreshPage",
    value: function refreshPage() {
      var _this3 = this;

      networkRequest("session?filter=active", "GET", {}, function (d) {
        _this3.setState({
          sessions: d,
          selectedKid: _this3.state.selectedKid,
          session: _this3.state.session,
          page: _this3.state.page,
          selectedKidSection: _this3.state.selectedKidSection,
          message: ""
        });
      });
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
        width: "90%",
        margin: "auto"
      };
      var headerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px"
      };
      var titleStyle = {
        margin: "10px"
      };
      var infoStyle = {
        fontStyle: 'italic',
        fontSize: '25px'
      };
      var sessions = [];
      this.state.sessions.forEach(function (session) {
        sessions.push( /*#__PURE__*/React.createElement(Session, {
          changePage: _this4.togglePage,
          key: session.Name,
          session: session
        }));
      }); //message

      var messageBox = null;

      if (this.state.message != "") {
        var messageBoxStyle = {
          position: "fixed",
          width: "100%",
          margin: "auto",
          backgroundColor: "green",
          color: "white",
          fontSize: "20px",
          textAlign: "center",
          top: "20px",
          padding: "10px",
          boxSizing: "border-box",
          borderRadius: "8px",
          zIndex: "20"
        };
        messageBox = /*#__PURE__*/React.createElement("div", {
          style: messageBoxStyle
        }, this.state.message);
      }

      return /*#__PURE__*/React.createElement("div", {
        style: divStyle
      }, messageBox, this.state.page == 0 ? /*#__PURE__*/React.createElement("div", {
        style: contentDivStyle
      }, /*#__PURE__*/React.createElement("div", {
        style: headerStyle
      }, /*#__PURE__*/React.createElement("h1", {
        style: titleStyle
      }, "Register")), /*#__PURE__*/React.createElement("hr", null), sessions.length > 0 ? sessions : /*#__PURE__*/React.createElement("p", {
        style: infoStyle
      }, "There are no open sessions.")) : /*#__PURE__*/React.createElement(RegisterKidPage, {
        back: this.back,
        section: this.state.selectedKidSection,
        session: this.state.selectedSession,
        kid: this.state.selectedKid
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null));
    }
  }]);

  return RegisterPage;
}(React.Component);