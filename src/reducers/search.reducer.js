import { userConstants } from '../constants';
export function search(state = {}, action) {
  switch (action.type) {
    case userConstants.SEARCH_REQUEST:
      return {
        isSearch: true,
        search: action.searchData
      };
    case userConstants.SEARCH_SUCCESS:
      return {
        isSearch: true,
        searchRes: action.searchRes
      };
    case userConstants.SEARCH_FAILURE:
      return {};
    default:
      return state
  }
}