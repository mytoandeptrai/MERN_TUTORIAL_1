import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "./../../api/index";

function* fetchPostsSaga(action) {
  const posts = yield call(api.fetchPosts);
  console.log("[posts]", posts);
  yield put(actions.getPosts.getPostSuccess(posts));
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
}

export default mySaga;
