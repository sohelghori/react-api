import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Label , Group, Button, Row, Col} from 'react-bootstrap';

class MyForm extends React.Component
{
    constructor(props){
        super(props);
        this.state =
        {
            username:'',
            password:'',
        }
    }
    mySubmitHandle = (event) =>{
        event.preventDefault();
        alert ("you are submitting :" + this.state.username + this.state.password)
    }


    myChangeHandle = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val})
    }

    render(){
        return(
            <div className="form-wrapper">
            <Row className="justify-content-md-center">
                <Col md={6} >
                    <p>{this.state.username}</p>
                    <p>{this.state.password}</p>
            <Form onSubmit={this.mySubmitHandle}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    name="username"
                    onChange={this.myChangeHandle}
                    placeholder="Enter email" />
                    
                </Form.Group>
               

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="text"
                    name="password"
                    onChange={this.myChangeHandle}
                    placeholder="Password" />
                </Form.Group>
               
                <Button variant="primary" type="submit" className="w-100 bg-black">
                    Submit
                </Button>
                </Form>
            </Col>
       </Row>  
       </div>   
        );
    }

}

export default MyForm;
