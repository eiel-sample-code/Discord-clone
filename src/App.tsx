import React, { useEffect } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar.tsx';
import Chat from './components/Chat/Chat.tsx';
import { useSelector } from 'react-redux';
import Login from './components/login/Login.tsx';
import { useAppDispatch, useAppSelector } from './app/hooks.ts';
import { auth } from './firebase.ts';
import { login, logout } from './features/userSlice.ts';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './utils/ErrorFallBack.tsx';


function App() {

  const user = useAppSelector((state) => state.user.user)
  // const user = null;
  // console.log(user);

  const dispatch = useAppDispatch();

  useEffect (() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if(loginUser){
        dispatch(
          login({
            uid:loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      }else{
        dispatch(logout());
      }
    })
  },[dispatch])

  return (
    <div className="App">
      {user ? (
      <>
      {/* サイドバー */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Sidebar />
      </ErrorBoundary>
      {/* チャット */}
      <Chat />
      </>
      ):(
        <><Login /></>
      )}

    </div>
  );
}

export default App;
