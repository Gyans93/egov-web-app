"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require("material-ui/DatePicker");

var _DatePicker2 = _interopRequireDefault(_DatePicker);

require("./index.css");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePickerUi = function DatePickerUi(props) {
  return _react2.default.createElement(_DatePicker2.default, props);
};

exports.default = DatePickerUi;


DatePickerUi.propTypes = {
  props: _propTypes2.default.object
};