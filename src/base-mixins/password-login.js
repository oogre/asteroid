/*
*   The password-login mixin:
*   - defines the `createUser` and `loginWithPassword` methods, porcelain for
*     calling the `createUser` and `login` ddp methods
*/

import {onLogin} from "../common/login-method";

/*
*   Public methods
*/

export function createUser ({username, email, password}) {
    const options = {
        password,
        email
    };
    return this.call("customCreateUser", options).then(onLogin.bind(this));
}

export function loginWithPassword ({username, email, password}) {
    const loginParameters = {
        password,
        user: {
            username,
            email
        }
    };
    return this.call("customLogin", loginParameters).then(onLogin.bind(this));
}
