import React from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Nav from './components/nav';
import AppRoutes from './routes';
import api from './api';
import './styles.css';

export const UserContext = React.createContext();

function App() {
  const history = useHistory();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch(api('/auth'), { method: 'GET', credentials: 'include' })
      .then(async (res) => {
        if (res.ok) return res.json();
        const json = await res.json();
        throw new Error(json.Message);
      })
      .then((data) => {
        setUser(data.user);
        history.push('/');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [history]);
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
