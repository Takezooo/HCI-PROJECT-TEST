import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import NextPage from './Pages/NextPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/nextpage' element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
