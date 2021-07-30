import PersonList from './PersonList';
import './App.css';
import React from 'react';

class App extends React.Component{
  state={}
  render () {return (
    <div className="App">
      <PersonList/>
    </div>
  );
  }
}

export default App;
