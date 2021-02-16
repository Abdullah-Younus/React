import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';


function App() {
  return (
    <>
      <Card/>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));