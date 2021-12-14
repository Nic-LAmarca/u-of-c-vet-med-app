import React,{useState, useEffect} from "react";
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
                <Navbar.Brand>
                    <Image href = "/AdminNavigation" className="d-inline-block align-top tr" src={images} fluid/>
                </Navbar.Brand>
                <Navbar.Brand>
                    Personal Settings
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar"/>
                <Navbar.Offcanvas
                    id="offcanvasNavbar me-auto"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">{window.localStorage.getItem("username")}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Button variant="info" href="/PersonalSettings" >Personal Settings</Button><br/>
                                <Button variant="info" href="/AdminAnimalManagement" >Animal Management</Button><br/>
                                <Button variant="info" href="/AdminUserManagement" >User Management</Button><br/>
                                <Button variant="info" href="/AdminTeachingRequestManagement" >
                                    Teaching Request Management
                                </Button><br/>
                                <Button variant="secondary" href="/" >Logout</Button>
                            </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
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
