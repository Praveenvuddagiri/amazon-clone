import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeMain from './HomeMain';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import auth from './firebase';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      // console.log(authUser);
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      }else{
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<HomeMain />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
