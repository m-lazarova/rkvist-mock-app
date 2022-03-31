import classes from './AssetListItem.module.css';

const AssetListItem = (props) => {
  return (
    <li className={classes.asset}>
      <h2>{props.description}</h2>
      <h3>{props.type}</h3>
      <p>{props.identity}</p>
    </li>
  )
}

export default AssetListItem;