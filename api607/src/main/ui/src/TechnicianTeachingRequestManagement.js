import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button,Form,Dropdown,DropdownButton,Navbar,Container,Image,Offcanvas,Nav,Badge,Table} from "react-bootstrap";
import axios from "axios";
import './TechnicianTeachingRequestManagement.css';
import DropdownItem from "react-bootstrap/DropdownItem";
import images from "./Images/vetmed.png";


export default function TechnicianTeachingRequestManagement() {
    let [requests,setRequests] = useState([]);

    const history = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/technicianTeachingRequests',
            null
        )
            .then(function(response){
                setRequests(response.data)

            })
            .catch(function(error){
                console.log(error);
            })
    },[])

    function renderTableBody(){
        return requests.map((value,key) =>{
            const {requestId, animalId, userId, requestDate} = value
            return(
                <tr key={requestId}>
                    <td>{requestId}</td>
                    <td>{animalId}</td>
                    <td>{userId}</td>
                    <td>{requestDate}</td>
                    <td><Button onClick={(e)=>updateRequest(requestId, true)} variant="success">Approve</Button></td>
                    <td><Button onClick={(e)=>updateRequest(requestId, false)} variant="danger">Deny</Button></td>
                </tr>
            )
        })
    }

    function renderHeaders(){
        const headers =["Request Id", "AnimalId", "User Id", "Request Date", "Approve", "Deny"]
        return headers.map((header)=>{
            return<th> {header}</th>
        })
    }

    async function updateRequest(requestId, decision) {
        var userId = window.localStorage.getItem("userId")
        axios.post('http://localhost:8080/technicianTeachingRequestDecision',
             null,
             {
                 params: {
                     userId,
                     requestId,
                     decision
                 }
             })
             .then(function(response){
                 setRequests(response.data)
             })
             .catch(function(error){
                 console.log(error);
             });;
    }


    return (
            <div>
                <Navbar variant="light" expand={false} bg="white">
                    <Container fluid>
                        <Navbar.Brand>
                            <Image href = "/TechnicianNavigation" className="d-inline-block align-top tr" src={images} fluid/>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            Technician Teaching Request Management
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
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar><br/>
                <Container>
                    <Table id = "requests" striped bordered hover responsive>
                        <thead>
                        {renderHeaders()}
                        </thead>
                        <tbody>
                        {renderTableBody()}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }