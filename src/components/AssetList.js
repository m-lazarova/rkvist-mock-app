import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetAssetList from '../redux/actions/assetActions';

import AssetListItem from './AssetListItem';
const AssetList = () => {
  const dispatch = useDispatch();
  const assetList = useSelector(state => state.AssetList);

  const fetchData = () => {
    dispatch(GetAssetList());
  }

  useEffect(() => {
    fetchData()
  }, []);

  const showData = (props) => {
    if(assetList.data) {
      return (
        <ul>
          {assetList.data.map(asset => (
            <AssetListItem 
              key={asset.identity}
              identity={asset.identity}
              description={asset.attributes.arc_description}
              type={asset.attributes.arc_display_type}
              />
          ))}
        </ul>
      )
    }    

    if (assetList.loading) {
      return <p>Loading...</p>
    }

    if (assetList.errorMessage !== '') {
      return <p>{assetList.errorMessage}</p>
    }

    return <p>No data</p>
  }
  return (
    <>
      <div>{showData()}</div>
    </>
  )
}

export default AssetList;