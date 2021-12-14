import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Col, Row, InputGroup, Form, Dropdown, DropdownButton, Navbar, Container, Image, Offcanvas, Nav, Badge, Table} from "react-bootstrap";
import axios from "axios";
import './AttendantTreatmentRequest.css';
import DropdownItem from "react-bootstrap/DropdownItem";
import images from "./Images/vetmed.png";

export default function AttendantTreatmentRequestManagement() {
    let [animals,setAnimals] = useState([]);
    let [treatmentTypeId, setTreatmentTypeId] = useState();

    const history = useNavigate();

    async function handleLogout(event) {
        event.preventDefault();
        history('/');
    }

    useEffect(() => {
        axios.get('http://localhost:8080/animals',
            null
            )
            .then(function(response){
                setAnimals(response.data)
            })
            .catch(function(error){
                console.log(error);
            })
    },[])

    function renderTableBody(){
        return animals.map((value,key) =>{
            const {animalId, animalName, species, breed, sex} = value
            return(
                <tr key={animalId}>
                    <td>{animalId}</td>
                    <td>{animalName}</td>
                    <td>{species}</td>
                    <td>{breed}</td>
                    <td>{sex}</td>
                    <td>
                        if(1 == 1){
                            <td><Button onClick={(e)=>makeRequest(animalId)} variant="success">Request</Button></td>
                        }
                    </td>
                </tr>
            )
        })
    }

    function renderHeaders(){
        const headers =["Animal ID", "Animal Name", "Species","Breed","Sex", "Request"]
        return headers.map((header)=>{
            return<th> {header}</th>
        })
    }

    async function makeRequest(animalId) {
        var userId = window.localStorage.getItem("userId")
        var treatmentId = treatmentTypeId
        axios.post('http://localhost:8080/attendantTreatmentRequest',
             null,
             {
                 params: {
                    userId,
                    animalId,
                    treatmentTypeId
                 }
             })
             .then(function(response){
                console.log(response.data)
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
                        <Image href = "/AttendantNavigation" className="d-inline-block align-top tr" src={images} fluid/>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        Attendant Treatment Requests
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
                                <Button variant="info" href="/AttendantTreatmentRequest" >
                                    Treatment Request Management
                                </Button><br/>
                                <Button variant="secondary" href="/" >Logout</Button>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar><br/>
            <Container>
            <Row className="flex-lg-wrap">
                    <Col lg="3">
                        <InputGroup className="me-2" >

                            <Form.Control
                                autoFocus
                                placeholder="Treatment Request Type"
                                 value = {treatmentTypeId}
                                  onChange =  {(e) => setTreatmentTypeId(e.target.value)}
                            />
                        </InputGroup><br/>
                    </Col>
                </Row>
                <Table id = "animals" striped bordered hover responsive>
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
