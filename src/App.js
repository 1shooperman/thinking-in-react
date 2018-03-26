import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';


// fake data -- let's pretend we have an API
import fakeData from './api.json';
// end fake data

class App extends Component {
  render() {
    return (
      <FilterableProductTable products={fakeData} />
    );
  }
}

export default App;
