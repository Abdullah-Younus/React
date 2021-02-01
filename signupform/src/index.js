import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from "react-bootstrap";
import axios from 'axios';


let url = "http://localhost:5000";
function Singupp() {


  function Userdata(event) {
    event.preventDefault();
    useEffect(() => {
      axios({
        method: 'post',
        url: url + '/signup',
        data: {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
          gender: document.getElementById('gender').value
        }, withCredentials: true
      }).then((response) => {
        if (response.data.status === 200) {
          alert(response.data.message)
        } else {
          alert(response.data.message);
        }
      }).catch((error) => {
        console.log(error);
      });
    }, []);

  }





  return (
    <div>
      <Container fluid="md">
        <div className="row justify-content-md-center">
          <Form onSubmit={Userdata}>
            <Form.Label>Name</Form.Label>
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Name
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="name"
              placeholder="Name"
            />
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" id="email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" id="password" />
            </Form.Group>
            <br />
            <Form.Label>Gender : </Form.Label>
            <select class="form-select" aria-label="Default select example" id="gender">
              <option value="Male" selected>Male</option>
              <option value="Female">Female</option>

            </select>
            <br />
            <Button variant="primary" type="submit" style={{ float: "right" }}>
              Submit
            </Button>
          </Form>

        </div>
      </Container>
    </div>
  )

}




ReactDOM.render(<Singupp />, document.querySelector('#root'));