//IMPORT
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//IMPORT PAGES
import Home from './pages/Home'
import About from './pages/About'
import Movie from './pages/Movie'
import PageNotFound from './pages/PageNotFound'
//IMPORT COMPONENTS
import Header from './components/header';
import Footer from './components/footer';
//IMPORT STYLES
import './App.css';

const App = () => (
  <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    <Footer />
  </Router>
)
export default App;
