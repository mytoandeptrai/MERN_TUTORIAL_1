import { INIT_STATE } from "../../constant";
import { getPosts, getType } from "../actions";

export default function postsReducers(state = INIT_STATE.posts, action) {
  switch (action.type) {
    case getType(getPosts.getPostsRequest): //case: 'getPostsRequest';
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPosts.getPostSuccess): //case: 'getPostSuccess';
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getPosts.getPostFailure): //case: 'getPostFailure';
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
