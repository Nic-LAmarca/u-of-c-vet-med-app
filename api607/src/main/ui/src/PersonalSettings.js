import React,{useState} from "react";
import {useHistory, useNavigate} from "react-router-dom";

import {
    Button,
    Form,
    Dropdown,
    DropdownButton,
    Table,
    Row,
    Container,
    Navbar,
    Image,
    Offcanvas,
    Nav, Badge, NavbarBrand, Col
} from "react-bootstrap";
import axios from "axios";
import './PersonalSettings.css';
import DropdownItem from "react-bootstrap/DropdownItem";
import images from "./Images/vetmed.png";


export default function PersonalSettings() {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    async function updateSettings(event) {
        event.preventDefault();
        var userId = window.localStorage.getItem("userId");
        await axios.post('http://localhost:8080/personalSettings',
            null,
            {
                params: {
                    userId,
                    fName,
                    lName,
                    email,
                    password
                }
            })
            .then(function(response){
                console.log(response)
            })
            .catch(function(error){
                console.log(error);
            })
        }

    return (
        <div>
            <Navbar variant="light" expand={false} bg="white">
                <Container fluid>
                    <Navbar.Brand href = "#home" >
                        <Image className="d-inline-block align-top" src={images} fluid/>
                    </Navbar.Brand>
                    <NavbarBrand>
                        Personal Settings
                    </NavbarBrand>
                </Container>
            </Navbar><br/>
            <Container fluid>
                <Form>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalName">
                        <Form.Label  column sm= {2}>First Name</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type = "name"
                                placeholder="First Name"
                                autoFocus
                                onChange={e=>setFName(e.target.value)}
                            />
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalName">
                        <Form.Label column sm= {2} >Last Name</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type = "name"
                                placeholder="Last Name"
                                autoFocus
                                onChange={e=>setLName(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalEmail">
                        <Form.Label column sm= {2} >Email</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type = "email"
                                placeholder="email@ucalgary.ca"
                                autoFocus
                                onChange={e=>setEmail(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalPassword">
                        <Form.Label column sm= {2} >Password</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type = "password"
                                placeholder="Password"
                                autoFocus
                                onChange={e=>setPassword(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Container fluid className="d-grid gap-5 d-lg-flex justify-content-md-center">
                    <Button onClick={updateSettings}>Save</Button>
                    </Container>
                </Form>

            </Container>


        </div>
    );
}
