 import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button,Form, Dropdown, DropdownButton, Table, Navbar, Container, Image, NavbarBrand, Row, Col, Offcanvas, Nav, Badge,Modal} from "react-bootstrap";
import axios from "axios";
import './AdminAnimalManagement.css';
import DropdownItem from "react-bootstrap/DropdownItem";
 import images from "./Images/vetmed.png";

export default function AdminAnimalManagement() {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [animalName, setAnimalName] = useState();
    const [species, setSpecies] = useState();
    const [weight, setWeight] = useState();
    const [tattooNum, setTattooNum] = useState();
    const [cityTattoo, setCityTattoo] = useState();
    const [dob, setDOB] = useState();
    const [breed, setBreed] = useState();
    const [sex, setSex] = useState();
    const [rfid, setRFID] = useState();
    const [microchip, setMicrochip] = useState();
    const [status, setStatus] = useState();
    const [location, setLocation] = useState();
    const [purpose, setPurpose] = useState();
    const [region, setRegion] = useState();
    const [subspecies, setSubspecies] = useState();
    const [color, setColor] = useState();
    const [distinguishingFeatures, setDistinguishingFeatures] = useState();

    const checkValidity = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
    }

    const addAnimal = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
        console.log(rfid)
        axios.post('http://localhost:8080/addAnimal',
            null,
            {
                params: {
                    animalName,
                    species,
                    weight,
                    tattooNum,
                    cityTattoo,
                    dob,
                    breed,
                    sex,
                    rfid,
                    microchip,
                    status,
                    location,
                    purpose,
                    region,
                    subspecies,
                    color,
                    distinguishingFeatures
                }
            })
            .then(function(response){
                console.log(response)

            })
            .catch(function(error){
                console.log(error);
            })
            }
            else{
                event.preventDefault();
                event.stopPropagation();
                setValidated(true);
            }
    }

    const removeAnimal = (event) => {

        setValidated(true);
        axios.post('http://localhost:8080/removeAnimal',
            null,
            {
                params: {
                    rfid
                }
            })
            .then(function(response){
                console.log(response)
            })
            .catch(function(error){
                console.log(error);
            })
        };

    return (
        <div>
            <Navbar variant="light" expand={false} bg="white">
                <Container fluid>
                    <Navbar.Brand href = "/AdminNavigation" >
                        <Image className="d-inline-block align-top" src={images} fluid/>
                    </Navbar.Brand>
                    <NavbarBrand>
                        Animal Management
                    </NavbarBrand>
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
            <Container fluid>
                <Form noValidate validated={validated} onSubmit={checkValidity}>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalName">
                        <Form.Label  column sm= {2}>Animal Name</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="Animal Name"
                                autoFocus
                                onInput={e=>setAnimalName(e.target.value)}
                            />
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalName">
                        <Form.Label column sm= {2}>Species</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="Dog"
                                autoFocus
                                onInput={e=>setSpecies(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalEmail">
                        <Form.Label column sm= {2}>Weight</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="20"
                                autoFocus
                                onInput={e=>setWeight(e.target.value)}
                                // onChange={e=>setEmail(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalPassword">
                        <Form.Label column sm= {2}>Tattoo Number</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="645374"
                                autoFocus
                                onInput={e=>setTattooNum(e.target.value)}
                                // onChange={e=>setPassword(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalName">
                        <Form.Label  column sm= {2} >city Tattoo</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="HOC London"
                                autoFocus
                                onInput={e=>setCityTattoo(e.target.value)}
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
                                onInput={e=>setDOB(e.target.value)}
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
                                onInput={e=>setBreed(e.target.value)}
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
                                onInput={e=>setSex(e.target.value)}
                                // onChange={e=>setPassword(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalName">
                        <Form.Label column sm= {2} >RFID</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="755675475675"
                                autoFocus
                                onInput={e=>setRFID(e.target.value)}
                                // onChange={e=>setLName(e.target.value)}
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
                                onInput={e=>setMicrochip(e.target.value)}
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
                                onInput={e=>setStatus(e.target.value)}
                                // onChange={e=>setEmail(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalEmail">
                        <Form.Label column sm= {2} >Location</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type = "name"
                                placeholder="Calgary"
                                autoFocus
                                onInput={e=>setLocation(e.target.value)}
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
                                onInput={e=>setPurpose(e.target.value)}
                                // onChange={e=>setPassword(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalName">
                        <Form.Label  column sm= {2} >Region</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type = "name"
                                placeholder="Spain"
                                autoFocus
                                onInput={e=>setRegion(e.target.value)}
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
                                onInput={e=>setSubspecies(e.target.value)}
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
                                onInput={e=>setColor(e.target.value)}
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
                                onInput={e=>setDistinguishingFeatures(e.target.value)}
                                // onChange={e=>setPassword(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Container fluid className="d-grid gap-1 d-sm-flex justify-content-sm-center">
                        <Button variant="success" onClick={addAnimal}>Add Animal</Button>
                        <Button variant="danger" onClick={handleShow}>Remove Animal</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Remove Animal</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form.Label>RFID</Form.Label>
                                <Form.Control
                                    type = "name"
                                    placeholder="74575647537"
                                    autoFocus
                                    onInput={e=>setRFID(e.target.value)}
                                    // onChange={e=>setFName(e.target.value)}
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="danger" onClick={removeAnimal}>
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
