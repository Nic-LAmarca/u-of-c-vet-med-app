import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    Button,
    Col,
    Row,
    InputGroup,
    Form,
    Dropdown,
    DropdownButton,
    Navbar,
    Container,
    Image,
    Offcanvas,
    Nav,
    Badge,
    Table,
    Modal
} from "react-bootstrap";
import axios from "axios";
import './TeacherTeachingRequest.css';
import DropdownItem from "react-bootstrap/DropdownItem";
 import images from "./Images/vetmed.png";
 import {toast} from "react-toastify";


export default function TeacherTeachingRequest() {
    let [animals,setAnimals] = useState([]);
    const [requestDate, setRequestDate] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history = useNavigate();

    async function handleLogout(event) {
        event.preventDefault();
        history('/');
    }

    useEffect(() => {
        axios.get('http://localhost:8080/teacherAvailableAnimals',
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
        var date = requestDate
        var date_regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
        if (!(date_regex.test(date))) {
            handleShow()
        }
        else{
            axios.post('http://localhost:8080/teacherTeachingRequest',
                null,
                {
                    params: {
                        userId,
                        animalId,
                        date
                    }
                })
                .then(function(response){
                    toast.success("Request Successful")
                    console.log(response.data)
                    setRequestDate("")
                })
                .catch(function(error){
                    toast.error("Request Unsuccessful")
                    console.log(error);
                });
        }

    }

    return (
        <div>
            <Navbar variant="light" expand={false} bg="white">
                <Container fluid>
                    <Navbar.Brand>
                        <Image href = "/TeacherNavigation" className="d-inline-block align-top tr" src={images} fluid/>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        Teacher Requests
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
                                <Button variant="info" href="/TeacherNavigation" >Navigation Screen</Button><br/>
                                <Button variant="info" href="/PersonalSettings" >Personal Settings</Button><br/>
                                <Button variant="info" href="/TeacherUserManagement" >User Management</Button><br/>
                                <Button variant="info" href="/TeacherTeachingRequest" >
                                    Teaching Requests
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
                                placeholder="Request Date"
                                 value = {requestDate}
                                  onChange =  {(e) => setRequestDate(e.target.value)}
                            />

                        </InputGroup>
                        <Form.Text id="passwordHelpBlock" muted>
                            Your date must be YYYY-MM-DD
                        </Form.Text>
                    </Col>
                </Row><br/>
                <Table id = "animals" striped bordered hover responsive>
                    <thead>
                    {renderHeaders()}
                    </thead>
                    <tbody>
                    {renderTableBody()}
                    </tbody>
                </Table>
                <Container fluid className="d-grid gap-1 d-sm-flex justify-content-sm-center">
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body>
                            Please Enter Valid Date
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container><br/>
            </Container>
        </div>
    );
}
