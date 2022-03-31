import { useState } from 'react';
import AssetListItem from './AssetListItem';
import classes from './SearchBar.module.css';

const SearchBar = () => {

  const [search, setSearch] = useState('');
  const [assets, setAssets] = useState([]);

  let url = 'archivist/v2/assets';

  const searchBoxHandler = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    url = 'archivist/v2/assets.attributes' + search

  }
  
  const searchHandler = async () => { 
    await fetch(url, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + 'accessToken',
        }
      })
      .then(response => response.json())
        .then(data => {
          setAssets(data.assets)
        });
        
      };

  return <div>
    <p className={classes.p}>Search for an asset...</p>
    <input className={classes.search} type="text" placeholder="Search" onChange={searchBoxHandler} /> 
    <button className={classes.button} onClick={searchHandler}>Search</button>
    <ul>
      {assets.map(asset => (
        <AssetListItem 
        key={asset.identity}
        identity={asset.identity}
        description={asset.attributes.arc_description}
        type={asset.attributes.arc_display_type}
        />
      ))}
    </ul>
  </div>
};

export default SearchBar;