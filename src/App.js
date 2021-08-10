import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { selectUser } from './features/userSlice';
import Login from './Login'; 

function App() {
const user = useSelector(selectUser)

  return (
    <div className='app'>
      <Header />

      {!user ? (
        <Login />
      ) : (
      
      
      <div className='app__body'>
        <Sidebar />
        <Feed />
        {/* Right Sidebar widget */}
        

      </div>
      )}
    </div>
  );
}

export default App;
