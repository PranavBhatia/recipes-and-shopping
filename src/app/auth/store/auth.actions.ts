import {Action} from '@ngrx/store';

export const LOGIN_START = '[Auth] AuthenticateSuccess Start';
export const AUTHENTICATE_SUCCESS = '[Auth] AuthenticateSuccess Success';
export const AUTHENTICATE_FAIL = '[Auth] AuthenticateSuccess Fail';
export const SIGN_UP_START = '[Auth] Sign Up Start';
export const LOGOUT = '[Auth] Logout';

export class AuthenticateSuccess implements Action {
  readonly type: string = AUTHENTICATE_SUCCESS;

  constructor(public payload: { email: string, userId: string, token: string, expirationDate: Date }) {
  }
}

export class Logout implements Action {
  readonly type: string = LOGOUT;
}

export class LoginStart implements Action {
  readonly type: string = LOGIN_START;

  constructor(public payload: { email: string, password: string }) {
  }
}

export class AuthenticateFail implements Action {
  readonly type: string = AUTHENTICATE_FAIL;

  constructor(public payload: string) {
  }
}

export class SignUpStart implements Action {
  readonly type: string = SIGN_UP_START;

  constructor(public payload: { email: string, password: string }) {
  }
}

export type AuthActions = SignUpStart | Logout | LoginStart | AuthenticateFail | AuthenticateSuccess;
