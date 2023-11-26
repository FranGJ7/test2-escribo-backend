"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var jwt = require('jsonwebtoken');
var verificaToken = function verificaToken(req, res, next) {
  var token = req.header('Authorization');
  if (!token) return res.status(401).json({
    message: 'Token não fornecido'
  });
  jwt.verify(token, 'your-secret-key', function (err, decoded) {
    if (err) return res.status(403).json({
      message: 'Token inválido'
    });
    req.userId = decoded.id;
    next();
  });
};
var _default = exports["default"] = verificaToken;