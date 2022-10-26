import { PayloadAction } from '@reduxjs/toolkit';
import { fork, take } from 'redux-saga/effects';
import { authActions, LoginPaylod } from './authSlice';

function* handleLogin(payload: LoginPaylod) {
  console.log('Handle login', payload);
}
function* handleLogout() {
  console.log('Handle logout');
}
function* watchLoginFlow() {
  while (true) {
    const action: PayloadAction<LoginPaylod> = yield take(authActions.login.type);
    yield fork(handleLogin, action.payload);

    yield take(authActions.logout.type);
    yield fork(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
