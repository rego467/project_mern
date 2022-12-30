import './App.css';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import BrowseBy from './pages/BrowseBy';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/browse-by' element={<BrowseBy />} />
        </Routes>
    </div>
  );
}

export default App;
