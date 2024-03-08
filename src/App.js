import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OfferList from './components/OfferList/OfferList';
import { AuthProvider } from './components/AuthContext/AuthContext';
import Login from './components/Login/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/offer-list" Component={OfferList} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
