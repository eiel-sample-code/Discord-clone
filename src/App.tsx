import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat/Chat';


function App() {
  return (
    <div className="App">
      {/* サイドバー */}
      <Sidebar />
      {/* チャット */}
      <Chat />

    </div>
  );
}

export default App;
