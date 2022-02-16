
import './App.css';
import ResponsiveAppBar from './pages/AppBar/AppBar';
import CardList from './pages/CardList/CardList';
// import LineChart from './pages/D3Demo/LineChart';
import Chart from './pages/D3Demo/ResponsiveBar'
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      {/* <CardList /> */}
      <Chart />
    </div>
  );
}

export default App;
