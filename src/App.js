
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AssetList from './components/AssetList';
import AssetListItem from './components/AssetListItem';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <Routes>
          <Route exact path="/all-assets" element={<AssetList/>}/>
          <Route path='/asset/:identity' exact element={<AssetListItem />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
