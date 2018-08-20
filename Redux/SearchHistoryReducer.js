export const types = {
  ADD_SEARCH_HISTORY_ITEM: 'ADD_SEARCH_HISTORY_ITEM'
}

export const searchHistoryActions = {
  addSearchHistoryItem: item => {
    return { type: types.ADD_SEARCH_HISTORY_ITEM, payload: item }
  }
}

const initialState = {
  searchHistory: []
}

export default function SearchHistoryReducer (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case types.ADD_SEARCH_HISTORY_ITEM:
      const newState = { ...state }
      const searchHistory = newState.searchHistory
      searchHistory.push(payload)

      return {
        ...state,
        searchHistory
      }

    default:
      return state
  }
}
