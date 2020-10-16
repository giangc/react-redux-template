import React from 'react';
import './App.css';

function App(props: any) {
  return (
    <div className="App">
      Application {props.appName}
    </div >
  );
}

export default App;
