const defaultState = {
  loading: false,
  data: [],
  errorMessage: ''
}

const AssetListReducer = (state = defaultState, action) => {
  switch (action.type){
    case 'ASSET_LIST_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'ASSET_LIST_ERROR':
      return {
        ...state,
        loading: false,
        errorMessage: 'Something went wrong loading asset list'
      }
    case 'ASSET_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    default: 
      return state;
  }
};

export default AssetListReducer;