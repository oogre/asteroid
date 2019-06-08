"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createUser = createUser;
exports.loginWithPassword = loginWithPassword;

var _loginMethod = require("../common/login-method");

/*
*   Public methods
*/

function createUser(_ref) {
    var username = _ref.username,
        email = _ref.email,
        password = _ref.password,
        device = _ref.device;

    var options = {
        device: device,
        password: password,
        email: email
    };
    return this.call("customCreateUser", options).then(_loginMethod.onLogin.bind(this));
} /*
  *   The password-login mixin:
  *   - defines the `createUser` and `loginWithPassword` methods, porcelain for
  *     calling the `createUser` and `login` ddp methods
  */

function loginWithPassword(_ref2) {
    var username = _ref2.username,
        email = _ref2.email,
        password = _ref2.password,
        device = _ref2.device;

    var loginParameters = {
        device: device,
        password: password,
        user: {
            username: username,
            email: email
        }
    };
    return this.call("customLogin", loginParameters).then(_loginMethod.onLogin.bind(this));
}