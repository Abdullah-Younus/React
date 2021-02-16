import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap';


function Card() {
    const [data, updateval] = useState([]);


    useEffect(() => {
        const userdata = localStorage.getItem('data');
        if (userdata) {
            updateval(JSON.parse(userdata));
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
    })
    function post(event) {
        event.preventDefault();
        var txtvalu = document.getElementById('txtchat').value;
        updateval(previousValue => {
            return previousValue.concat(txtvalu);
        })
    }

    function del(i) {
        let new_todo = [...data];
        new_todo.splice(i, 1);
        updateval(new_todo);

    }
    return (
        <>
            <div className="card">

                <Form onSubmit={post}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="name" placeholder="Write Text" id="txtchat" />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ float: 'right' }}>
                        POST
                </Button>
                </Form>

            </div>

            {
                data.map((eachItem, i) => {
                    return <div key={i} id="card">
                        <div className="container">
                            <div className="row">
                                <div className="cardss">
                                    <ul>
                                        <li>{eachItem}  <Button variant="primary" style={{ float: 'right', marginRight: '10px' }} onClick={(e) => del(i)}>Delete</Button></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                })
            }
        </>

    )

}

export default Card;