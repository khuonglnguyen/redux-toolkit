import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';

export function* log(action: PayloadAction) {
  console.log('Log', action);
}

function* handleIncreamentSaga(action: PayloadAction<number>) {
  console.log('Wating for 2 seconds');
  // Wait 2s
  yield delay(2000);
  console.log('Done, dispatch action');
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('counter saga');

  yield takeEvery(incrementSaga.toString(), handleIncreamentSaga);
  //   yield takeLatest(incrementSaga.toString(), handleIncreamentSaga);
}
