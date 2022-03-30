import ActionTypes from "../constants/ActionTypes";
const GetAssetList = () => async dispatch => {

  const accessToken = '';

  try {
    dispatch({
      type: ActionTypes.ASSET_LIST_LOADING
    });

    const response = await fetch("archivist/v2/assets", {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + accessToken,
        }
      })
      .then(response => response.json())
        .then(data => {
          dispatch({
            type: ActionTypes.ASSET_LIST_SUCCESS,
            payload: data.assets
          });
        });

    if (!response.ok) {
      throw new Error ('Could not fetch data');
    }

  } catch (e) {
    dispatch({
      type: ActionTypes.ASSET_LIST_ERROR
    });
  } 
};

export default GetAssetList;