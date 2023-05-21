import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/NavBar'
import SongContainer from './components/SongPlayer/SongContainer';
function App() {
  return (
    <>
      <NavBar/>
      <SongPlayer/>
      <Footer/>
    </>
  );
}

export default App;
