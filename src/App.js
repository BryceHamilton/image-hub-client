import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/nav';
import AppRoutes from './routes';
import './styles.css';

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:4000/auth')
      .then(async (res) => {
        if (res.ok) return res.json();
        const json = await res.json();
        throw new Error(json.Message);
      })
      .then((data) => setUser(data.user))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
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
