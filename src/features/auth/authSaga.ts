import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { call, fork, put, take } from 'redux-saga/effects';
import { authActions, LoginPaylod } from './authSlice';

function* handleLogin(payload: LoginPaylod) {
  try {
    localStorage.setItem('access_token', 'afs');
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'Victor Nguyen',
      })
    );
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message));
  }
  // redirect to admin page
  yield put(push('/admin'));
}
function* handleLogout() {
  localStorage.removeItem('access_token');
  // redirect to login page
  yield put(push('/login'));
}
function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPaylod> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
