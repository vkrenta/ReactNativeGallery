import {call, put, takeEvery} from 'redux-saga/effects';
import getAllDocuments from '../api';
import {loadData, putData} from '../actions';

function* workerLoadData() {
  const data = yield call(getAllDocuments);

  const pictures = data.map(element => {
    const {
      id,
      urls: {raw, thumb},
      user: {username},
      description,
      alt_description,
      width,
      height,
    } = element;

    return {
      id,
      raw,
      thumb,
      username,
      description,
      alt_description,
      width,
      height,
    };
  });

  yield put(putData(pictures));
}

export function* watchLoadData() {
  yield takeEvery(loadData().type, workerLoadData);
}
