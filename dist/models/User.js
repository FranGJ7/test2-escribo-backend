"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var userSchema = new _mongoose["default"].Schema({
  _id: {},
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  telephone: [{
    ddd: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    }
  }],
  password: {
    type: String,
    minlength: 6,
    maxlength: 60,
    required: true
  },
  createdAt: {
    type: Date,
    "default": new Date()
  },
  updateAt: {
    type: Date,
    "default": new Date()
  },
  lastLogin: {
    type: String,
    "default": new Date()
  },
  token: {
    type: String,
    required: true
  }
});
var User = _mongoose["default"].model('Users', userSchema);
var _default = exports["default"] = User;