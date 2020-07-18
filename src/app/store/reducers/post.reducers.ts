import { IPostState } from "../models/post-state.interface";
import { PostActions, PostActionTypes } from '../actions/post.actions';

const initialState: IPostState = {
  posts: [],
  loading: false,
  error: undefined
}

export const PostReducer = (state: IPostState = initialState, action: PostActions) => {
  switch (action.type) {

    case PostActionTypes.LOAD_POSTS:
      return { ...state, loading: true };
    case PostActionTypes.LOAD_POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false }
    case PostActionTypes.LOAD_POSTS_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case PostActionTypes.LOAD_POST:
      return { ...state, loading: true };
    case PostActionTypes.LOAD_POST_SUCCESS:
      return { ...state, posts: action.payload, loading: false }
    case PostActionTypes.LOAD_POST_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case PostActionTypes.ADD_POST:
      return { ...state, loading: true };
    case PostActionTypes.ADD_POST_SUCCESS:
      return { ...state, posts: action.payload, loading: false };
    case PostActionTypes.ADD_POST_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case PostActionTypes.EDIT_POST:
      return { ...state, loading: true };
    case PostActionTypes.EDIT_POST_SUCCESS:
      return {
        ...state, posts: state.posts.map(post => post._id === action._id ? {
          ...post, post: action.payload
        } : post), loading: false
      };
    case PostActionTypes.EDIT_POST_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case PostActionTypes.DELETE_POST:
      return { ...state, loading: true };
    case PostActionTypes.DELETE_POST_SUCCESS:
      return { ...state, posts: state.posts.filter(item => item._id !== action.payload), loading: false };
    case PostActionTypes.DELETE_POST_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
}
