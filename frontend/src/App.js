import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import SearchResult from './pages/SearchResult/SearchResults';
import ShowMoviePage from './pages/ShowMoviePage/ShowMoviePage';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/movie/:id" element={<ShowMoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;