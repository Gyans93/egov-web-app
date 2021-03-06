"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require("material-ui/SvgIcon");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BirthDeath = function BirthDeath(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    (0, _extends3.default)({ className: "custom-icon", viewBox: "0 0 24 24" }, props),
    _react2.default.createElement("path", {
      d: "M20.8296,7.844 L16.284,7.844 C15.928,7.844 15.6344,7.5528 15.6344,7.1944 L15.6344,2.6496 C15.6352,2.292 15.3432,2 14.9856,2 L8.4936,2 C8.1368,2 7.844,2.2912 7.844,2.6496 L7.844,7.1944 C7.844,7.552 7.552,7.844 7.1944,7.844 L2.6496,7.844 C2.2928,7.844 2,8.1352 2,8.4936 L2,14.9864 C2,15.3432 2.292,15.636 2.6496,15.636 L7.1944,15.636 C7.5512,15.636 7.844,15.9272 7.844,16.2856 L7.844,20.8312 C7.844,21.1888 8.136,21.4808 8.4936,21.4808 L14.9864,21.4808 C15.3424,21.4808 15.636,21.1896 15.636,20.8312 L15.636,16.2856 C15.636,15.928 15.9272,15.636 16.2856,15.636 L20.8312,15.636 C21.1872,15.636 21.4808,15.3448 21.4808,14.9864 L21.4808,8.4936 C21.4792,8.1352 21.1872,7.844 20.8296,7.844 Z M14.5808,14.7264 C13.5896,16.776 10.2904,17 9.0976,15.3296 C8.1816,14.0472 8.332,12.5152 9.6176,11.0432 C10.7064,9.7928 11.256,8.6008 11.0264,7.04 C14.0544,8.78 15.7872,12.2376 14.5808,14.7264 Z",
      id: "path-1"
    })
  );
};

exports.default = BirthDeath;