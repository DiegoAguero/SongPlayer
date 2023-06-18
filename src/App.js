import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/NavBar'
import SongContainer from './components/SongPlayer/SongContainer';
import SongList from './components/SongPlayer/SongList';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <NavBar/>
        <Routes>
          <Route path='/' element={<SongContainer/>}/>
          <Route path='/list' element={<SongList/>}/>
          {/* <Route path='/url' element={<SongContainer/>}/> */}
          <Route path='*' element={<Navigate to= '/'/>}/>
        </Routes>
      <Footer/>
    </Router>
    </>
    
  );
}

export default App;
