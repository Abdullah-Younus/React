import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form, Container } from "react-bootstrap";


function Post() {
  const [data, updateval] = useState([]);
  function add(event) {
    event.preventDefault();

    let name = document.getElementById('txtname').value;
    let profileimg = document.getElementById('profileimg').value;
    let imgUrl = document.getElementById('imgurl').value;
    let posttext = document.getElementById('posttext').value;
    let newData = {
      name: name,
      profileimg: profileimg,
      imgUrl: imgUrl,
      posttext: posttext,
    }

    updateval((previous) => {
      return previous.concat([newData]);
    });


  }
  return (
    <div>
      <Container fluid="md">
        <div className="row justify-content-md-center">
          <div className="col-md-6 form">
            <Form onSubmit={add} >
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter Name" id="txtname" required />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Profile Image</Form.Label>
                  <Form.Control type="url" placeholder="Profile Url" id="profileimg" required />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Image Url</Form.Label>
                <Form.Control placeholder="Image Url" id="imgurl" required />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Post Text</Form.Label>
                <Form.Control placeholder="Write Post" id="posttext" required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Post
            </Button>
            </Form>
          </div>
        </div>
      </Container>







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









