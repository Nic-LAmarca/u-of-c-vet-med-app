import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Form, Dropdown, DropdownButton, Navbar, Container, Image, Offcanvas, Nav, Badge, Table} from "react-bootstrap";
import axios from "axios";
import './TechnicianTreatmentRequestManagement.css';
import DropdownItem from "react-bootstrap/DropdownItem";
import images from "./Images/vetmed.png";

export default function TechnicianTreatmentRequestManagement() {
    let [requests,setRequests] = useState([]);
    const [requestId, setRequestId] = useState();

    const history = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/treatmentRequests',
            null
            )
            .then(function(response){
                console.log(response.data)
                setRequests(response.data)
            })
            .catch(function(error){
                console.log(error);
            })
    },[])

    async function renderTableBody(){
        return requests.map((requests,indexedDB) =>{
            const { requestId, name} = requestId
            return(
                <tr key={requestId}>
                    <td>{requestId}</td>
                    <td>{name}</td>
                </tr>
            )
        })
    }

    async function acceptRequest(event) {
        event.preventDefault();
    }

    return (
        <div>
            <Navbar variant="light" expand={false} bg="white">
                <Container fluid>
                    <Navbar.Brand>
                        <Image href = "/TechnicianNavigation" className="d-inline-block align-top tr" src={images} fluid/>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        Technician Treatment Request Management
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
                                <Button variant="info" href="/PersonalSettings" >Personal Settings</Button><br/>
                                <Button variant="info" href="/UserManagement" >User Management</Button><br/>
                                <Button variant="info" href="TeacherRequestManagement" >
                                    Teaching Request Management
                                    <Badge className="ms-2" bg = "danger">8</Badge>
                                </Button><br/>
                                <Button variant="info" href="TeacherRequestManagement" >
                                    Treatment Request Management
                                    <Badge className="ms-2" bg = "danger">6</Badge>
                                </Button><br/>
                                <Button variant="secondary" href="/" >Logout</Button>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar><br/>
            <Container>
                <Table id = "requests">
                    <tbody>
                    <tr>
                        {requests.map((requests) => <tb>requests</tb>,<Button onClick={acceptRequest} variant="info">Accept</Button>)}
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}
