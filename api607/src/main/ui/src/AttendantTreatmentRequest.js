import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Col, Row, InputGroup, Form, Modal, Dropdown, DropdownButton, Navbar, Container, Image, Offcanvas, Nav, Badge, Table} from "react-bootstrap";
import axios from "axios";
import './AttendantTreatmentRequest.css';
import DropdownItem from "react-bootstrap/DropdownItem";
import images from "./Images/vetmed.png";

export default function AttendantTreatmentRequestManagement() {
    let [animals,setAnimals] = useState([]);
    let [treatmentTypeId, setTreatmentTypeId] = useState();
    let [treatments,setTreatments] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        axios.get('http://localhost:8080/treatmentTypes',
            null
            )
            .then(function(response){
                setTreatments(response.data)
            })
            .catch(function(error){
                console.log(error);
            })
    },[])

    function renderTreatmentTypeTableBody(){
        return treatments.map((value,key) =>{
            const {treatmentId, treatmentType} = value
            return(
                <tr key={treatmentId}>
                    <td>{treatmentId}</td>
                    <td>{treatmentType}</td>
                </tr>
            )
        })
    }

    function renderTreatmentTypeHeaders(){
        const headers =["Treatment Id", "Treatment Type"]
        return headers.map((header)=>{
            return<th> {header}</th>
        })
    }

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
                    <td><Button onClick={(e)=>makeRequest(animalId)} variant="success">Request</Button></td>
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
        if(treatmentTypeId > 0 && treatmentTypeId <= treatments.length){
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
                 })
             }
             else{
                handleShow();
             }
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
                            <Offcanvas.Title id="offcanvasNavbarLabel">{window.localStorage.getItem("username")}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Button variant="info" href="/AttendantNavigation" >Navigation Screen</Button><br/>
                                <Button variant="info" href="/PersonalSettings" >Personal Settings</Button><br/>
                                <Button variant="info" href="AttendantTreatmentRequest" >

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
                                placeholder="Treatment Request Id"
                                 value = {treatmentTypeId}
                                  onChange =  {(e) => setTreatmentTypeId(e.target.value)}
                            />
                        </InputGroup><br/>
                    </Col>
                </Row>
                <Table id = "treatments" striped bordered hover responsive>
                    <thead>
                    {renderTreatmentTypeHeaders()}
                    </thead>
                    <tbody>
                    {renderTreatmentTypeTableBody()}
                    </tbody>
                </Table>
                <Table id = "animals" striped bordered hover responsive>
                    <thead>
                    {renderHeaders()}
                    </thead>
                    <tbody>
                    {renderTableBody()}
                    </tbody>
                </Table>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                        <Form.Label>Invalid Treatment Id</Form.Label>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    );
}
