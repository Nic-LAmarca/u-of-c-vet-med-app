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
    NavbarBrand,
    Row, Col, Offcanvas, Nav, Badge,Modal
} from "react-bootstrap";
import axios from "axios";
import './AdminAnimalManagement.css';
import DropdownItem from "react-bootstrap/DropdownItem";
 import images from "./Images/vetmed.png";


export default function AdminAnimalManagement() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    const handleRemove = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

    return (
        <div className="AdminAnimalManagement-grid-container">
            <Navbar variant="light" expand={false} bg="white">
                <Container fluid>
                    <Navbar.Brand href = "/AdminNavigation" >
                        <Image className="d-inline-block align-top" src={images} fluid/>
                    </Navbar.Brand>
                    <NavbarBrand>
                        Personal Settings
                    </NavbarBrand>
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
                                <Button variant="info" href="/AdminNavigation">Animal Navigation</Button><br/>
                                <Button variant="info" href="/TeacherRequestManagement" >
                                    Teacher Request Management
                                    <Badge className="ms-2" bg = "danger">8</Badge>
                                </Button><br/>
                                <Button variant="info" href="/PersonalSettings" >Personal Settings</Button><br/>
                                <Button variant="info" href="/userManagement" >User Management</Button><br/>
                                <Button variant="secondary" href="/">Logout</Button>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar><br/>
            <Container fluid>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalName">
                        <Form.Label  column sm= {2}>Animal Name</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="Animal Name"
                                autoFocus

                                // onChange={e=>setFName(e.target.value)}
                            />
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalName">
                        <Form.Label column sm= {2} >Species</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="Dog"
                                autoFocus
                                // onChange={e=>setLName(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalEmail">
                        <Form.Label column sm= {2} >Weight</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="20"
                                autoFocus
                                // onChange={e=>setEmail(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalPassword">
                        <Form.Label column sm= {2} >Tattoo Number</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="645374"
                                autoFocus
                                // onChange={e=>setPassword(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalName">
                        <Form.Label  column sm= {2}>city Tattoo</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="HOC London"
                                autoFocus
                                // onChange={e=>setFName(e.target.value)}
                            />
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalName">
                        <Form.Label column sm= {2} >DOB</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="2018-08-15"
                                autoFocus
                                // onChange={e=>setLName(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalEmail">
                        <Form.Label column sm= {2} >Breed</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="Beagle"
                                autoFocus
                                // onChange={e=>setEmail(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalPassword">
                        <Form.Label column sm= {2} >Sex</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="MN"
                                autoFocus
                                // onChange={e=>setPassword(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group onSubmit={handleRemove} as={Row} className="justify-content-center mb-3" controlId="formHoizontalName">
                        <Form.Label  column sm= {2}>RFID</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="74575647537"
                                autoFocus
                                // onChange={e=>setFName(e.target.value)}
                            />
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalName">
                        <Form.Label column sm= {2} >Microchip</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="755675475675"
                                autoFocus
                                // onChange={e=>setLName(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalEmail">
                        <Form.Label column sm= {2} >Status</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="Available"
                                autoFocus
                                // onChange={e=>setEmail(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalPassword">
                        <Form.Label column sm= {2} >Purpose</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type = "name"
                                placeholder="Dairy"
                                autoFocus
                                // onChange={e=>setPassword(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalName">
                        <Form.Label  column sm= {2}>Region</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type = "name"
                                placeholder="Spain"
                                autoFocus
                                // onChange={e=>setFName(e.target.value)}
                            />
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalName">
                        <Form.Label column sm= {2} >Subspecies</Form.Label>
                        <Col sm={5}>
                            <Form.Control

                                type = "name"
                                placeholder="Taurus"
                                autoFocus
                                // onChange={e=>setLName(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalEmail">
                        <Form.Label column sm= {2} >Color</Form.Label>
                        <Col sm={5}>
                            <Form.Control

                                type = "name"
                                placeholder="Brown,Black,White"
                                autoFocus
                                // onChange={e=>setEmail(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalPassword">
                        <Form.Label column sm= {2} >Distinguishing Features</Form.Label>
                        <Col sm={5}>
                            <Form.Control

                                type = "name"
                                placeholder="Stocky, Compact"
                                autoFocus
                                // onChange={e=>setPassword(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Container fluid className="d-grid gap-5 d-lg-flex justify-content-md-center">
                        <Button variant="success" onClick={handleSubmit}>Add Animal</Button>
                        <Button variant="danger" onClick={handleShow}>
                            Remove Animal
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Remove Animal</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form.Label >RFID</Form.Label>
                                <Form.Control
                                    required
                                    type = "name"
                                    placeholder="74575647537"
                                    autoFocus
                                    // onChange={e=>setFName(e.target.value)}
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="danger" onClick={handleClose}>
                                    Remove Animal
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Container><br/>
                </Form>

            </Container>
        </div>
    );
}
