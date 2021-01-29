import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function Hi(props) {
  return <div className="main">
    <strong>Hello  {props.name}</strong>
    <div className="center">
      <h4>Some Info</h4>
      <ul>
        <li>Name : {props.name}</li>
        <li>F Name : {props.fname}</li>
        <li>Age : {props.age}</li>
        <li>Email : {props.email}</li>
      </ul>
      <h3>Some Math Opration</h3>
      <ol>
        <li>Add: {props.add}</li>
        <li>Minus:{props.minus}</li>
        <li>Multiply:{props.multiply}</li>
      </ol>
    </div>
  </div>
}


ReactDOM.render(
  <>
    <Hi name="Abdullah" fname="Younus" age="45" email="kb337137@gmail.com" add={10+10} minus={10-5} multiply={10*5} />
  </>,
  document.querySelector("#root"))