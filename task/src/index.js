import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from "react-bootstrap";


// function previewFile() {
//   const preview = document.querySelector('img');
//   const file = document.querySelector('input[type=file]').files[0];
//   const reader = new FileReader();

//   reader.addEventListener("load", function () {
//     // convert image file to base64 string
//     preview.src = reader.result;
//   }, false);

//   if (file) {
//     reader.readAsDataURL(file);
//   }
// }
function Post() {
  const [data, updateval] = useState([]);
  function add(event) {
    event.preventDefault();

    let name = document.getElementById('txtname').value;
    let posttext = document.getElementById('posttext').value;
    let imgUrl = document.getElementById('imgurl').src;
    let newData = {
      name: name,
      posttext: posttext,
      imgUrl: imgUrl
    }

    updateval((previous) => {
      return previous.concat([newData]);
    });


  }
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>


      <form onSubmit={add} style={{ margin: "10px" }}>
        <label>Name:</label>
        <input type="text" id="txtname" required />
        <br />
        <label>Post:</label>
        <textarea type="text" id="posttext" required placeholder="what is in your mind" />
        <br />
        <label>Image URl:</label>
        <input type="url" id="imgurl" required />
        <br />
        <button>Post</button>
      </form>










      {console.log("data :", data)}








      {data.map((eachItem, i) => {
        return (
          <div key={i} style={{ border: "1px solid black", margin: "5px", width: "80%" }}>

            <h2>{eachItem.name}</h2>
            <h6>{eachItem.posttext}</h6>
            <img src={eachItem.imgUrl} alt="#" />
          </div>
        )
      })}
    </div>
  )




}

ReactDOM.render(<Post />, document.querySelector('#root'));









