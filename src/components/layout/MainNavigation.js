import {  Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div>
        <Link to='/'>RKVST</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/all-assets' id='all-assets'>All Assets</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default MainNavigation;