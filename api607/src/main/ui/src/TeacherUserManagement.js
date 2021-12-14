import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button,Form,Dropdown,DropdownButton,Navbar,Container,Image,Offcanvas,Nav,Badge,Table} from "react-bootstrap";
import axios from "axios";
import './TeacherUserManagement.css';
import DropdownItem from "react-bootstrap/DropdownItem";
import images from "./Images/vetmed.png";


export default function TeacherUserManagement() {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function addUser(event) {
        event.preventDefault();
        var theUserType = window.localStorage.getItem("userType");
        var userType = "Student"
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
                <Navbar.Brand>
                    <Image href = "/TeacherNavigation" className="d-inline-block align-top tr" src={images} fluid/>
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
                        <Offcanvas.Title id="offcanvasNavbarLabel">{window.localStorage.getItem("username")}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Button variant="info" href="/PersonalSettings" >Personal Settings</Button><br/>
                            <Button variant="info" href="/TeacherUserManagement" >User Management</Button><br/>
                            <Button variant="info" href="/TeacherTeachingRequest" >
                                Teaching Request Management
                            </Button><br/>
                            <Button variant="secondary" href="/" >Logout</Button>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar><br/>
        <Container>
            <Form className="TeacherUserManagement-grid-item2">
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        autoFocus
                        onInput={e=>setFName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        autoFocus
                        onInput={e=>setLName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        onInput={e=>setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        autoFocus
                        onInput={e=>setPassword(e.target.value)}
                    />
                </Form.Group>
            </Form>
        </Container>
        <Container>
            <Button className = "TeacherUserManagement-grid-item3" onClick={addUser}>Add User</Button>
            <Button className = "TeacherUserManagement-grid-item4" onClick={blockUser}>Block User</Button>
            <Button className = "TeacherUserManagement-grid-item5" onClick={removeUser}>Remove User</Button>
        </Container>
    </div>
    );
}
