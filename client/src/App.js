import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import css from './App.module.css';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Home from './containers/Home/Home';
import Signup from './containers/Signup/Signup';


const parsedKeyDataInLS = (key = '') => {
  return (JSON.parse(localStorage.getItem(key))) || '';
};

const IS_USER_LOGGED_IN = 'isUserLoggedIn';
const USER_DATA = 'userData';

function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(parsedKeyDataInLS(IS_USER_LOGGED_IN));
  const [userData, setUserData] = useState(parsedKeyDataInLS(USER_DATA));

  useEffect(() => {
    setIsUserLoggedIn(parsedKeyDataInLS(IS_USER_LOGGED_IN));
    setUserData();
  }, [isUserLoggedIn]);

  return (
    <div className={css.App}>
      <Nav isUserLoggedIn={isUserLoggedIn} userData={userData} setIsUserLoggedIn={setIsUserLoggedIn} />
      <Route path='/' exact>
        <Home isUserLoggedIn={isUserLoggedIn} userData={userData} setIsUserLoggedIn={setIsUserLoggedIn} />
      </Route>
      <Route path='/signup' exact>
        <Signup isUserLoggedIn={isUserLoggedIn} userData={userData} setIsUserLoggedIn={setIsUserLoggedIn} />
      </Route>
      <Footer />

    </div>
  );
}

export default App;
