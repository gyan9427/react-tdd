import PersonList from './PersonList';
import './App.css';
import React from 'react';

class App extends React.Component{
  state={person:[]}
  render () {return (
    <div className="App">
      <PersonList person={this.state.person}/>
    </div>
  );
  }
}

export default App;
