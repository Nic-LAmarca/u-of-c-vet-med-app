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
    Nav,
    Badge,
    NavbarBrand,
    Col,
    Modal
} from "react-bootstrap";
import axios from "axios";
import './PersonalSettings.css';
import DropdownItem from "react-bootstrap/DropdownItem";
import images from "./Images/vetmed.png";
import {toast} from 'react-toastify';

export default function PersonalSettings() {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    async function updateSettings(event) {

        event.preventDefault();
        if(fName.length > 0 && lName.length >0 && email.length>0 && email.includes("@ucalgary.ca")&&password.length>0){
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

                    toast.success("User Successfully Added")
                })
                .catch(function(error){
                    toast.error("User not Added")
                })
        }else handleShow();

        }

    function renderOptions(){
        if(window.localStorage.getItem("userType") == "Administrator"){
            return(
                <Offcanvas.Body >
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Button variant="info" href="/AdminNavigation" >Navigation Screen</Button><br/>
                        <Button variant="info" href="/PersonalSettings" >Personal Settings</Button><br/>
                        <Button variant="info" href="/AdminAnimalManagement" >Animal Management</Button><br/>
                        <Button variant="info" href="/AdminUserManagement" >User Management</Button><br/>
                        <Button variant="info" href="/AdminTeachingRequestManagement">Teaching Request Management</Button><br/>
                        <Button variant="secondary" href="/" >Logout</Button>
                    </Nav>
                </Offcanvas.Body>
                )
        }
        else if(window.localStorage.getItem("userType") == "Student"){
        return(
            <div>
                <Offcanvas.Body >
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Button variant="info" href="/StudentNavigation" >Navigation Screen</Button><br/>
                        <Button variant="info" href="/PersonalSettings" >Personal Settings</Button><br/>
                        <Button variant="secondary" href="/" >Logout</Button>
                    </Nav>
                </Offcanvas.Body>
            </div>
            )
        }
        else if(window.localStorage.getItem("userType") == "Animal Health Technician"){
        return(
            <div>
                <Offcanvas.Body >
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Button variant="info" href="/TechnicianNavigation" >Navigation Screen</Button><br/>
                        <Button variant="info" href="/PersonalSettings" >Personal Settings</Button><br/>
                        <Button variant="info" href="TechnicianTeachingRequestManagement" >
                            Teaching Request Management
                        </Button><br/>
                        <Button variant="info" href="TechnicianTreatmentRequestManagement" >
                            Treatment Request Management
                        </Button><br/>
                        <Button variant="secondary" href="/" >Logout</Button>
                    </Nav>
                </Offcanvas.Body>
            </div>
            )
        }
        else if(window.localStorage.getItem("userType") == "Animal Health Attendant"){
        return(
            <div>
                <Offcanvas.Body >
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Button variant="info" href="/AttendantNavigation" >Navigation Screen</Button><br/>
                        <Button variant="info" href="/PersonalSettings" >Personal Settings</Button><br/>
                        <Button variant="info" href="AttendantTreatmentRequest" >

                            Treatment Request Management
                        </Button><br/>
                        <Button variant="secondary" href="/" >Logout</Button>
                    </Nav>
                </Offcanvas.Body>
            </div>
            )
        }
        else if(window.localStorage.getItem("userType") == "Teaching Technician"){
                return(
                    <div>
                        <Offcanvas.Body >
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Button variant="info" href="/TeacherNavigation" >Navigation Screen</Button><br/>
                                <Button variant="info" href="/PersonalSettings" >Personal Settings</Button><br/>
                                <Button variant="info" href="/TeacherUserManagement" >User Management</Button><br/>
                                <Button variant="info" href="/TeacherTeachingRequest" >
                                    Teaching Requests
                                </Button><br/>
                                <Button variant="secondary" href="/" >Logout</Button>
                            </Nav>
                        </Offcanvas.Body>
                    </div>
                    )
                }
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
                    {renderOptions()}
                </Navbar.Offcanvas>
            </Container>
        </Navbar><br/>
        <Container fluid>
            <Form >
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
                        <Form.Text id="passwordHelpBlock" muted>
                            Your email must be a valid @ucalgary.ca email
                        </Form.Text>
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
                <Container fluid className="d-grid gap-1 d-sm-flex justify-content-sm-center">
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body>
                            Please Enter Valid User Information
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container><br/>
            </Form>
        </Container>
    </div>
    );
}
