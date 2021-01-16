import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/nav';
import AppRoutes from './routes';
import './styles.css';

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Nav />
        <AppRoutes />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
