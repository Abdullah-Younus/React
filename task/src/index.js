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
                  <Form.Label>Profile URL</Form.Label>
                  <Form.Control type="url" placeholder="Profile Url" id="profileimg" required />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Image URL</Form.Label>
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
          <div id="main-card">
            <Container fluid="md">
              <div className="row justify-content-md-center">
                <div className="col-md-6 card">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={eachItem.profileimg} alt="profile pic" style={{ width: 40, height: 40 }} />
                    </div>
                    <div className="col-md-10">
                      <p className="name">{eachItem.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <p className="mt-2 mb-2">{eachItem.posttext}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <img src={eachItem.imgUrl}
                        alt="{Post Image}" style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        )
      })}
    </div>
  )




}

ReactDOM.render(<Post />, document.querySelector('#root'));









