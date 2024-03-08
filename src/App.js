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
          <Route path="/application-provider-example" Component={Login} />
          <Route path="/application-provider-example/offer-list" Component={OfferList} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
