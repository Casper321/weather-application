export const types = {
  ADD_SEARCH_HISTORY_ITEM: 'ADD_SEARCH_HISTORY_ITEM',
  DELETE_SEARCH_HISTORY_ITEM: 'DELETE_SEARCH_HISTORY_ITEM',
  REPLACE_SEARCH_HISTORY: 'REPLACE_SEARCH_HISTORY',
  DELETE_CAR_HISTORY: 'DELETE_CAR_HISTORY'
}

export const searchHistoryActions = {
  addSearchHistoryItem: item => {
    return { type: types.ADD_SEARCH_HISTORY_ITEM, payload: item }
  },
  deleteSearchHistoryItem: item => {
    return { type: types.DELETE_SEARCH_HISTORY_ITEM, payload: item }
  },
  replaceSearchHistory: item => {
    return { type: types.DELETE_SEARCH_HISTORY_ITEM, payload: item }
  },
  deleteCarHistory: item => {
    return { type: types.DELETE_CAR_HISTORY, payload: item }
  }
}

const initialState = {
  searchHistory: []
}

export default function SearchHistoryReducer (state = initialState, action) {
  const { type, payload } = action
  const newState = { ...state }
  let searchHistory = newState.searchHistory

  switch (type) {
    case types.ADD_SEARCH_HISTORY_ITEM:
      searchHistory.unshift(payload)

      return {
        ...state,
        searchHistory
      }

    case types.DELETE_SEARCH_HISTORY_ITEM:
      searchHistory.splice(parseInt(payload), 1)

      return {
        ...state,
        searchHistory
      }

    case types.REPLACE_SEARCH_HISTORY:
      searchHistory = payload
      
      return {
        ...state,
        searchHistory
      }

    case types.DELETE_CAR_HISTORY:
      return {
        ...state,
        searchHistory: []
      }

    default:
      return state
  }
}
