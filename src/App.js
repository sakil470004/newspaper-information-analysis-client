
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import ResponsiveAppBar from './pages/AppBar/AppBar';
import CardList from './pages/CardList/CardList';
// import LineChart from './pages/D3Demo/LineChart';
import Chart from './pages/D3Demo/ResponsiveBar'
function App() {
  return (
    <div className="App">

      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Chart />}>
          </Route>
          <Route path="/allNews" element={<CardList />} >
          </Route>
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
