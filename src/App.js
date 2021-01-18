import React from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Nav from './components/nav';
import AppRoutes from './routes';
import api from './api';
import './styles.css';

export const UserContext = React.createContext();
export const UserImageContext = React.createContext();

function App() {
  const history = useHistory();
  const [user, setUser] = React.useState(null);
  const [userImages, setUserImages] = React.useState([]);

  React.useEffect(() => {
    fetch(api('/auth'), {
      method: 'GET',
      credentials: 'include',
      // bad! cookie should be httpOnly
      headers: { Authorization: 'Bearer ' + document.cookie.split('=')[1] },
    })
      .then(async (res) => {
        if (res.ok) return res.json();
        const json = await res.json();
        throw new Error(json.Message);
      })
      .then((json) => {
        // bad! cookie should be set server side, httpOnly and secure
        document.cookie = `token=${json.token}`;
        setUser(json.user);
        history.push('/');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [history]);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <UserImageContext.Provider value={[userImages, setUserImages]}>
        <Router>
          <Nav />
          <AppRoutes />
        </Router>
      </UserImageContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
