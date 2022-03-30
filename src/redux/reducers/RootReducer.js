import { combineReducers  } from "redux";
import AssetListReducer from './AssetListReducer';

const RootReducer = combineReducers( { 
  AssetList: AssetListReducer,
});

export default RootReducer;