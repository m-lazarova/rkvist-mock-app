
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AssetList from './components/AssetList';
import MainNavigation from './components/layout/MainNavigation';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <Routes>
          <Route exact path="/all-assets" element={<AssetList/>}/>
        </Routes>
      </Router> 
      <SearchBar />
    </div>
  );
}

export default App;
