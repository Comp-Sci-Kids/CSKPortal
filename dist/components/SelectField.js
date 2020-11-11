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

var SelectField = /*#__PURE__*/function (_React$Component) {
  _inherits(SelectField, _React$Component);

  var _super = _createSuper(SelectField);

  function SelectField(props) {
    var _this;

    _classCallCheck(this, SelectField);

    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.getValue = _this.getValue.bind(_assertThisInitialized(_this));
    _this.input = React.createRef();
    return _this;
  }

  _createClass(SelectField, [{
    key: "getValue",
    value: function getValue() {
      return this.input.current.value;
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.props.valueChanged(this.props.field, e.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var divStlye = {
        boxSizing: "border-box",
        width: "100%",
        padding: "5px 0px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end"
      };
      var labelStyle = {
        margin: 0,
        marginRight: "40px",
        fontSize: "25px",
        fontWeight: "bold"
      };
      var pStyle = {
        margin: 0,
        fontSize: "20px"
      };
      var selectStyle = {
        width: "206px",
        fontSize: "18px"
      };

      if (this.props.disabled) {
        labelStyle.fontStyle = "italic", labelStyle.color = "gray", pStyle.fontStyle = "italic", pStyle.color = "gray";
      }

      var element = null;

      if (this.props.editing) {
        var options = [];
        this.props.options.forEach(function (o) {
          options.push( /*#__PURE__*/React.createElement("option", {
            key: o.value,
            value: o.value
          }, o.display));
        });
        element = /*#__PURE__*/React.createElement("select", {
          style: selectStyle,
          value: this.props.value,
          onChange: this.onChange
        }, /*#__PURE__*/React.createElement("option", {
          value: "",
          defaultValue: true,
          hidden: true
        }, this.props.title), options);
      } else {
        element = /*#__PURE__*/React.createElement("p", {
          style: pStyle
        }, this.props.value);
      }

      return /*#__PURE__*/React.createElement("div", {
        style: divStlye
      }, /*#__PURE__*/React.createElement("label", {
        style: labelStyle
      }, this.props.title, ":"), element);
    }
  }]);

  return SelectField;
}(React.Component);