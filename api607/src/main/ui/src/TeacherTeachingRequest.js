 import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form, Dropdown, DropdownButton, Container, Navbar, Image, Offcanvas, Nav, Badge} from "react-bootstrap";
import axios from "axios";
import './TeacherTeachingRequest.css';
import DropdownItem from "react-bootstrap/DropdownItem";
 import images from "./Images/vetmed.png";


export default function TeacherTeachingRequest() {
    let [animals,setAnimals] = useState([]);
    const [requestAnimalId, setRequestAnimalId] = useState();
    const [requestAnimal, setRequestAnimal] = useState('');
    let [requests,setRequests] = useState([]);
    const [cancelRequestId, setCancelRequestId] = useState();
    const [cancelRequest, setCancelRequest] = useState('');


    const history = useNavigate();

    async function handleLogout(event) {
        event.preventDefault();
        history('/');
    }

    // *** All for Animal ***
    async function dropDown(event) {
            const json = {
            };
            await axios.get('http://localhost:8080/teacherAvailableAnimals', json,
            {
                headers: {
                'content-type': 'application/json'
                }
            })
            .then(function(response){
                setAnimals(response.data);
            })
            .catch(function(error){
                console.log(error);
            });
        }

        async function handleSelect(event){
            event.preventDefault();
            event.persist();
            setRequestAnimalId(event.target.text);
        }

    async function makeRequest(event) {
        event.preventDefault();
        await axios.post('http://localhost:8080/TeacherDashboard',
            null,
            {
                params: {
                    requestAnimalId
                }
            })
            .then(function(response){
                setRequestAnimal(response.data);
            })
            .catch(function(error){
                console.log(error);
            });
    }
    // *** All for Animal ***

    // *** All for Request ***
    async function cancelDropDown(event) {
            const json = {
            };
            await axios.get('http://localhost:8080/teacherAvailableRequests', json,
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

        async function handleCancelSelect(event){
            event.preventDefault();
            event.persist();
            setCancelRequestId(event.target.text);
        }

    async function CancelRequest(event) {
        event.preventDefault();
        await axios.post('http://localhost:8080/TeacherDashboard',
            null,
            {
                params: {
                    cancelRequestId
                }
            })
            .then(function(response){
                setCancelRequest(response.data);
            })
            .catch(function(error){
                console.log(error);
            });
    }
    // *** All for Request ***

    return (
        <div>
            <Navbar variant="light" expand={false} bg="white">
                <Container fluid>
                    <Navbar.Brand href = "/TeacherNavigation" >
                        <Image className="d-inline-block align-top" src={images} fluid/>
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
                                <Button variant="secondary" href="/" >Logout</Button>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar><br/>
            <Container>

            </Container>
            <DropdownButton  className= "TeacherTeachingRequest-grid-item3" id="dropdown-basic-button" title="Animals" onClick={dropDown}  alignRight>
                <Dropdown.Item></Dropdown.Item>
                {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*/}
                {/*<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                <ul>
                    {animals.map(animals => <DropdownItem custom onClick={handleSelect}>{animals}</DropdownItem>)}
                </ul>
            </DropdownButton>
            <b className="TeacherTeachingRequest-grid-item5">
                Animal Selected: {requestAnimalId}
            </b>
            <Button className="TeacherTeachingRequest-grid-item4" onClick={makeRequest} variant="info">Send Request</Button>
            <b className="TeacherTeachingRequest-grid-item6">
                Animal Requested: {requestAnimal}
            </b>
            <br/><br/>
            <DropdownButton  className= "TeacherTeachingRequest-grid-item8" id="dropdown-basic-button" title="Requests" onClick={cancelDropDown}  alignRight>
                <Dropdown.Item></Dropdown.Item>
                {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*/}
                {/*<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                <ul>
                    {requests.map(requests => <DropdownItem custom onClick={handleCancelSelect}>{requests}</DropdownItem>)}
                </ul>
            </DropdownButton>
            <b className="TeacherTeachingRequest-grid-item10">
                Request Selected: {cancelRequestId}
            </b>
            <Button className="TeacherTeachingRequest-grid-item9" onClick={cancelRequest} variant="info">Cancel Request</Button>
            <b className="TeacherTeachingRequest-grid-item11">
                Request Cancelled: {cancelRequest}
            </b>
        </div>
    );
}
