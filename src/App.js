import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/user/userSlice';
import Login from './Login.js';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch= useDispatch();
  console.log("User is:" + user);

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      }
      else{
        // logout
        dispatch(logout());
      }
    })
  }
  
  ,[])
  return (
    <div className="app">

      {/* header */}
      <Header />
      {!user ? (<Login />) : (
        <div className='app__body'>
          {/* <Sidebar/> */}
          <Sidebar />
          {/* feed */}
          <Feed />
          {/* widgets */}
          <Widgets />
        </div>)}
      {/* app body */}

    </div>
  );
}

export default App;
