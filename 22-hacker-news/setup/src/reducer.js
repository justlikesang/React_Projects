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
        query: action.payload,
        page: 0,
      };
    case HANDLE_PAGE:
      // tested out writing two different ways to approach
      // method 1
      const increase = () => {
        if (action.payload.page === state.nbPages - 1) {
          return 0;
        }
        return action.payload.page + 1;
      };
      if (action.payload.value === 'inc') {
        return {
          ...state,
          page: increase(),
        };
      }
      // method 2
      if (action.payload.value === 'dec') {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.nbPages - 1;
        }
        return {
          ...state,
          page: prevPage,
        };
      }
    default:
      throw new Error(`no matching "${action.type} action"`);
  }
};
export default reducer;
