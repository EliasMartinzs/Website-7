import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


