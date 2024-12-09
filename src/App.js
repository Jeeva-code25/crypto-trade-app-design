import './App.css';
import Banner from './components/Banner';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <MainPage/>
    </div>
  );
}

export default App;
