import AssetListReducer from "./AssetListReducer";
import ActionTypes from '../constants/ActionTypes';

describe('AssetListReducer', () => {
  it('should return the default state', () => {
    expect(AssetListReducer(undefined, {})).toEqual({
      loading: false,
      data: [],
      errorMessage: ''
    });
  });

  it('should handle loading', () => {
    const loadingAction = {
      type: ActionTypes.ASSET_LIST_LOADING
    };

    expect(AssetListReducer({}, loadingAction)).toEqual({
      loading: true,
    });
  });

  it('should handle success', () => {
    const successAction = { 
      type: ActionTypes.ASSET_LIST_SUCCESS,
      payload: 'Data'
    };

    expect(AssetListReducer({}, successAction)).toEqual({data: 'Data', loading: false});
  });

  it('should handle error', () => {
    const errorAction = {
      type: ActionTypes.ASSET_LIST_ERROR
    };

    expect(AssetListReducer({}, errorAction)).toEqual({
      loading: false,
      errorMessage: 'Something went wrong loading asset list'
    })
  })
})