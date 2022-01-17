import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        isLoading: false,
      };
    case REMOVE_STORY:
      const newItems = state.hits.filter(
        (story) => story.objectID !== action.payload.id
      );
      return {
        ...state,
        hits: newItems,
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        query: payload.query,
        isLoading: true,
      };
    default:
      throw new Error(`no matching "${action.type} action"`);
  }
};
export default reducer;
