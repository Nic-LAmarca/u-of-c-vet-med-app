import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {
    Button,
    Form,
    Dropdown,
    DropdownButton,
    Navbar,
    Container,
    Image,
    Offcanvas,
    Nav,
    Badge,
    Table
} from "react-bootstrap";
import axios from "axios";
import './TechnicianTreatmentRequestManagement.css';
import DropdownItem from "react-bootstrap/DropdownItem";
import images from "./Images/vetmed.png";


export default function TechnicianTreatmentRequestManagement() {
    let [requests,setRequests] = useState([]);
    const [requestId, setRequestId] = useState();
    const [requestMessage, setRequestMessage] = useState('');

    const history = useNavigate();

    async function handleLogout(event) {
        event.preventDefault();
        history('/');
    }
    useEffect(() => {
        async function populate(){
            const json = {
            };
            await axios.get('http://localhost:8080/technicianNewRequests', json,
                {
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                .then(function(response){
                    setRequests(response.data);
                })
                .catch(function(error){
                    console.log(error);
                });
        }
    },[])

    async function renderTableBody(){
        return this.state.requests.map((requests,indexedDB) =>{
            const { id, name} = requestId
            return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                </tr>
            )
        })
    }

    async function dropDown() {
        const json = {
        };
        await axios.get('http://localhost:8080/technicianNewRequests', json,
        {
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(function(response){
            setRequests(response.data);
        })
        .catch(function(error){
            console.log(error);
        });
    }

    async function handleRequestSelect(event){
        event.preventDefault();
        event.persist();
        setRequestId(event.target.text);
        setRequestMessage();
    }

    async function approveRequest(event) {
        event.preventDefault();
        await axios.post('http://localhost:8080/technicianRequestApproval',
            null,
            {
                params: {
                    requestId
                }
            })
            .then(function(response){
                setRequestId();
                console.log(response.data);
                setRequestMessage(response.data);
            })
            .catch(function(error){
                console.log(error);
            });
        }

        async function denyRequest(event) {
            event.preventDefault();
            await axios.post('http://localhost:8080/technicianRequestDenial',
                null,
                {
                    params: {
                        requestId
                    }
                })
                .then(function(response){
                    setRequestId();
                    setRequestMessage(response.data);
                })
                .catch(function(error){
                    console.log(error);
                });
            }


    return (
        <div>
            <Navbar variant="light" expand={false} bg="white">
                <Container fluid>
                    <Navbar.Brand>
                        <Image href = "/TechnicianNavigation" className="d-inline-block align-top tr" src={images} fluid/>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        Technician Request
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
                        {requests.map((requests) => <tb>requests</tb>,<Button onClick={approveRequest} variant="info">Approve Request</Button>,<Button onClick={denyRequest} variant="danger">Cancel Request</Button>)}
                    </tr>

                    </tbody>
                </Table>
            </Container>

            {/*<DropdownButton className= "TechnicianTreatmentRequestManagement-grid-item3" id="dropdown-basic-button" title="Requests" onClick={dropDown} alignRight>*/}
            {/*    /!*<Dropdown.Item href="#/action-1">A</Dropdown.Item>*!/*/}
            {/*    /!*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*!/*/}
            {/*    /!*<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*!/*/}
            {/*    <ul>*/}
            {/*        {requests.map(requests => <DropdownItem onClick={handleRequestSelect}>{requests}</DropdownItem>)}*/}
            {/*    </ul>*/}
            {/*</DropdownButton>*/}
            {/*<p className="TechnicianTreatmentRequestManagement-grid-item5">*/}
            {/*    Request Selected: {requestId}*/}
            {/*</p>*/}
            {/*<Button onClick={approveRequest} variant="info">Approve Request</Button>*/}
            {/*<Button onClick={denyRequest} variant="danger">Cancel Request</Button>*/}
            {/*<b className="TechnicianTreatmentRequestManagement-grid-item7">*/}
            {/*    Request Approved/Cancelled: {requestMessage}*/}
            {/*</b>*/}
        </div>
    );
}
