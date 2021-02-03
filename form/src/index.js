import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Check() {
  const [name, setname] = useState({
    Name: '',
    fName: '',
    phone: ''
  });

  function add(event) {
    event.preventDefault();
    document.getElementById('show-data').innerHTML = JSON.parse(name)

  }
  function getValue(e) {

    let name = e.target.name
    let value = e.target.value
    setname((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
      // if (name === 'Name') {
      //   return {
      //     Name: value,
      //     fName: preVal.fName,
      //     phone: preVal.phone
      //   }
      // }
      // else if (name === 'fName') {
      //   return {
      //     Name: preVal.Name,
      //     fName: value,
      //     phone: preVal.phone
      //   }
      // }
      // else if (name === 'phone') {
      //   return {
      //     Name: preVal.Name,
      //     fName: preVal.fName,
      //     phone: value
      //   }
      // }
    })
  }

  return (
    <>
      <form onSubmit={add}>

        <label>Name</label>
        <input type="text" id="txt-name" onChange={getValue} name='Name' />
        <br />
        <label>fname</label>
        <input type="text" id="txt-fname" onChange={getValue} name='fName' />
        <br />
        <label>Phone</label>
        <input type="number" id="txt-number" onChange={getValue} name='phone' />
        <br />
        <button>Submit</button>
      </form>
      <div id="show-data">
        {/* <h1>{name.Name}</h1>
        <h1>{name.fName}</h1>
        <h1>{name.phone}</h1> */}

      </div>
    </>
  )
}
ReactDOM.render(<Check />, document.querySelector('#root'));