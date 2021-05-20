import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostSuccess: (payload) => payload,
  getPostFailure: (err) => err,
});

/* 
getPostsRequest: {
    type: 'getPostsRequest'
}
getPostSuccess:{
    type: 'getPostSuccess'
    payload: payload
}
getPostFailure:{
    type: 'getPostFailure'
    payload: payload
}

getType(getPosts.getPostSuccess) => {
    type: 'getPostSuccess'
    payload: payload
}
*/
