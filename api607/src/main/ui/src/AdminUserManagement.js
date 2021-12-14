import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {
    Button,
    Form,
    Dropdown,
    DropdownButton,
    Table,
    Navbar,
    Container,
    Image,
    Offcanvas,
    Nav,
    Row, Col, Modal, FormGroup
} from "react-bootstrap";
import axios from "axios";
import './AdminUserManagement.css';
import DropdownItem from "react-bootstrap/DropdownItem";

import images from "./Images/vetmed.png";



export default function AdminUserManagement() {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");

    async function addUser(event) {
        event.preventDefault();
        var theUserType = window.localStorage.getItem("userType");
        await axios.post('http://localhost:8080/addUser',
            null,
            {
                params: {
                    fName,
                    lName,
                    email,
                    userType,
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

        async function blockUser(event) {
            event.preventDefault();
            var theUserType = window.localStorage.getItem("userType");
            await axios.post('http://localhost:8080/blockUser',
                null,
                {
                    params: {
                        email,
                        password,
                    }
                })
                .then(function(response){
                    console.log(response)
                })
                .catch(function(error){
                    console.log(error);
                })
            }

        async function removeUser(event) {
            event.preventDefault();
            var theUserType = window.localStorage.getItem("userType");
            console.log(fName)
            await axios.post('http://localhost:8080/removeUser',
                null,
                {
                    params: {
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
                    <Navbar.Brand href = "/AdminNavigation" >
                        <Image className="d-inline-block align-top tr" src={images} fluid/>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        User Management
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar"/>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar me-auto"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">User Name Here</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Button variant="info" href="/AdminNavigation" >Navigation Screen</Button><br/>
                                <Button variant="info" href="/PersonalSettings" >Personal Settings</Button><br/>
                                <Button variant="info" href="/AdminAnimalManagement" >Animal Management</Button><br/>
                                <Button variant="info" href="/AdminUserManagement" >User Management</Button><br/>
                                <Button variant="info" href="/AdminTeachingRequestManagement" >
                                    Teacher Request Management
                                </Button><br/>
                                <Button variant="secondary" href="/" >Logout</Button>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar><br/>
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
                <Container fluid className="gap-1 d-sm-flex justify-content-sm-center">
                    <Button variant="success" onClick={addUser}>Add User</Button>
                    <Button variant="dark" onClick={blockUser}>Block User</Button>
                    <Button variant= "danger " onClick={removeUser}>Remove User</Button>
                </Container>
            </Form>

        </div>

    );
}
