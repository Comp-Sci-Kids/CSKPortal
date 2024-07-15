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

var Calendar = /*#__PURE__*/function (_React$Component) {
  _inherits(Calendar, _React$Component);

  var _super = _createSuper(Calendar);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _super.call(this, props);
    var dates = props.dates.split(",");

    if (dates.length == 0 || dates[0] == "") {
      var curDate = new Date();
      dates = [curDate.getMonth() + 1 + "/" + curDate.getDate() + "/" + curDate.getFullYear()];
    }

    var smallestMonth = parseInt(dates[0].split("/")[0]);
    var largestMonth = parseInt(dates[dates.length - 1].split("/")[0]);
    _this.smallestMonth = smallestMonth;
    _this.largestMonth = largestMonth;
    _this.state = {
      year: dates[0].split("/")[2],
      month: smallestMonth
    };
    _this.prevMonth = _this.prevMonth.bind(_assertThisInitialized(_this));
    _this.nextMonth = _this.nextMonth.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Calendar, [{
    key: "prevMonth",
    value: function prevMonth() {
      if (this.state.month <= this.smallestMonth) {
        return;
      }

      this.setState({
        month: parseInt(this.state.month) - 1,
        year: this.state.year
      });
    }
  }, {
    key: "nextMonth",
    value: function nextMonth() {
      if (this.state.month >= this.largestMonth) {
        return;
      }

      this.setState({
        month: parseInt(this.state.month) + 1,
        year: this.state.year
      });
    }
  }, {
    key: "render",
    value: function render() {
      var e = React.createElement;
      var keyCount = 0;
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var cHeadCols = [];

      for (var i = 0; i < 7; i++) {
        var colChild = "";

        if (i == 0) {
          colChild = months[this.state.month - 1];
        }

        if (i == 5 || i == 6) {
          var backGroundColor = "";
          var c = "";

          if (i == 5) {
            if (this.smallestMonth != this.state.month) {
              backGroundColor = "red";
              c = "white";
            }
          }

          if (i == 6) {
            if (this.largestMonth != this.state.month) {
              backGroundColor = "red";
              c = "white";
            }
          }

          colChild = e("button", {
            style: {
              width: "10px",
              height: "10px",
              borderRadius: "5px",
              border: "solid 0px",
              backgroundColor: backGroundColor,
              color: c
            },
            key: keyCount,
            onClick: i == 5 ? this.prevMonth : this.nextMonth
          }, i == 5 ? "<" : ">");
          keyCount += 1;
        }

        var cHeadCol = e("td", {
          style: {
            fontSize: "15px"
          },
          key: keyCount
        }, colChild);
        keyCount += 1;
        cHeadCols.push(cHeadCol);
      }

      var cHeadRow = e("tr", {
        key: keyCount
      }, cHeadCols);
      keyCount += 1;
      var cHead = e("thead", {
        key: keyCount
      }, cHeadRow);
      keyCount += 1;
      var tBodyRows = [];
      var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", 'Sat'];
      var dayCols = [];

      for (var _c = 0; _c < 7; _c++) {
        dayCols.push(e("td", {
          style: {
            textAlign: "center",
            padding: 0,
            fontSize: "15px"
          },
          key: _c
        }, weekDays[_c]));
      }

      var dayRow = e("tr", {
        key: keyCount
      }, dayCols);
      keyCount += 1;
      tBodyRows.push(dayRow);
      var dates = [];
      var dateString = "20".concat(this.state.year, "-").concat(this.state.month, "-1 00:00:00");
      var date = new Date(dateString.replace(/-/g, '/'));
      var daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

      for (var _i = 0; _i < 6 * 7; _i++) {
        if (_i >= date.getDay() && _i < date.getDay() + daysInMonth) {
          dates.push(_i - date.getDay() + 1);
        } else {
          dates.push("");
        }
      }

      var counter = 0;
      var eventDates = this.props.dates.split(",");
      var dateRows = [];

      for (var r = 0; r < 6; r++) {
        var dateCols = [];

        for (var _c2 = 0; _c2 < 7; _c2++) {
          var color = "";

          if (dates[counter] != "") {
            var eventDay = "".concat(this.state.month, "/").concat(dates[counter], "/").concat(this.state.year);

            if (eventDates.includes(eventDay)) {
              color = "blue";
            }
          }

          dateCols.push(e("td", {
            style: {
              textAlign: "center",
              padding: 0,
              color: color
            },
            key: keyCount
          }, dates[counter]));
          keyCount += 1;
          counter += 1;
        }

        dateRows.push(e("tr", {
          key: keyCount
        }, dateCols));
        keyCount += 1;
      }

      tBodyRows.push.apply(tBodyRows, dateRows);
      var cBody = e("tbody", {
        key: keyCount
      }, tBodyRows);
      keyCount += 1;
      var tableChild = [cHead, cBody];
      var widthStyle = window.screen.width >= mobileThreshold && "400px" || "200px";
      var sizeStyle = window.screen.width >= mobileThreshold && "25px" || "12px";
      var cTable = e("table", {
        style: {
          tableLayout: "fixed",
          width: widthStyle,
          margin: '0 auto',
          fontSize: sizeStyle
        }
      }, tableChild);
      return cTable;
    }
  }]);

  return Calendar;
}(React.Component);