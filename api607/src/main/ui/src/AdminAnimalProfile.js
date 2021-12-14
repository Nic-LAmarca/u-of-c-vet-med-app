import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {
    Button,
    Form,
    Dropdown,
    DropdownButton,
    Table,
    ListGroup,
    Tabs,
    Tab,
    TabContent,
    TabContainer,
    Nav,
    NavItem,
    Row,
    Col,
    Navbar, Container, Image, Offcanvas,InputGroup,FormControl
} from "react-bootstrap";

import axios from "axios";
import './AdminAnimalProfile.css';
import DropdownItem from "react-bootstrap/DropdownItem";
import images from "./Images/vetmed.png";


export default function AdminAnimalProfile() {
    const [animalId, setAnimalId] = useState(window.localStorage.getItem("animal"));
    const [animalName, setAnimalName] = useState("");
    const [animalSpecies, setAnimalSpecies] = useState("");
    const [animalStatus, setAnimalStatus] = useState("");
    const [description, setDescription] = useState("");
    const [comments, setComments] = useState([]);
    let [animals, setAnimals] = useState([]);


    useEffect(() => {
        axios.post('http://localhost:8080/searchForAnimal',
            null,
            {
                params: {
                    animalId
                }
            })
            .then(function(response){
                console.log(response)
                setAnimals(Array.from(response.data))
                var table = document.getElementById("profileTable");
                const animalFound = response.data
                setAnimalName(animalFound.animalName)
                setAnimalSpecies(animalFound.animalSpecies)
                setAnimalStatus(animalFound.statusType)
                if(table.rows.length <= 1){
                    for(var i = 1; i < 17; i++){
                        var row = table.insertRow(i)
                        for(var j = 0; j < 2; j++){
                            row.insertCell(j)
                        }
                    }
                    table.rows[1].cells[0].innerHTML = "Species"
                    table.rows[2].cells[0].innerHTML = "Weight"
                    table.rows[3].cells[0].innerHTML = "Tattoo Number"
                    table.rows[4].cells[0].innerHTML = "City Tattoo"
                    table.rows[5].cells[0].innerHTML = "Birth Date"
                    table.rows[6].cells[0].innerHTML = "Breed"
                    table.rows[7].cells[0].innerHTML = "Sex"
                    table.rows[8].cells[0].innerHTML = "RFID"
                    table.rows[9].cells[0].innerHTML = "Microchip"
                    table.rows[10].cells[0].innerHTML = "Location"
                    table.rows[11].cells[0].innerHTML = "Alert"
                    table.rows[12].cells[0].innerHTML = "Purpose"
                    table.rows[13].cells[0].innerHTML = 'Region'
                    table.rows[14].cells[0].innerHTML = "Subspecies"
                    table.rows[15].cells[0].innerHTML = "Color"
                    table.rows[16].cells[0].innerHTML = "Distinguishing Features"
                    table.rows[1].cells[1].innerHTML = animalFound.species
                    table.rows[2].cells[1].innerHTML = animalFound.weight
                    table.rows[3].cells[1].innerHTML = animalFound.tattooNum
                    table.rows[4].cells[1].innerHTML = animalFound.cityTattoo
                    table.rows[5].cells[1].innerHTML = animalFound.birthDate
                    table.rows[6].cells[1].innerHTML = animalFound.breed
                    table.rows[7].cells[1].innerHTML = animalFound.sex
                    table.rows[8].cells[1].innerHTML = animalFound.rfid
                    table.rows[9].cells[1].innerHTML = animalFound.microchip
                    table.rows[10].cells[1].innerHTML = animalFound.location
                    table.rows[11].cells[1].innerHTML = animalFound.alert
                    table.rows[12].cells[1].innerHTML = animalFound.purpose
                    table.rows[13].cells[1].innerHTML = animalFound.region
                    table.rows[14].cells[1].innerHTML = animalFound.subspecies
                    table.rows[15].cells[1].innerHTML = animalFound.color
                    table.rows[16].cells[1].innerHTML = animalFound.distinguishingFeatures
                }
            })
            .catch(function(error){
                console.log(error);
            })
        axios.post('http://localhost:8080/comments',
        null,
        {
            params: {
                animalId
            }
        })
        .then(function(response){
            console.log(response)
            setComments(response.data)
            // var table = document.getElementById("commentTable");
            // if(table.rows.length <= 1){
            //     const commentList = response.data
            //     var j = 1;
            //     for(var i = 0; i < commentList.length; i++){
            //         var temp = commentList[i]
            //         var row = table.insertRow(j)
            //         for(var k = 0; k < 4; k++){
            //             row.insertCell(k)
            //         }
            //         table.rows[j].cells[0].innerHTML = temp.commentId
            //         table.rows[j].cells[1].innerHTML = temp.userId
            //         table.rows[j].cells[2].innerHTML = temp.description
            //         table.rows[j].cells[3].innerHTML = temp.date
            //         j = j + 1
            //     }
            // }
        })
        .catch(function(error){
            console.log(error);
        })
    },[])

    async function addComment(event) {
        event.preventDefault();
        console.log("Here")
        var userId = window.localStorage.getItem("userId");
        await axios.post('http://localhost:8080/addComment',
        null,
        {
            params: {
                userId,
                animalId,
                description
            }
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error);
        })
    }
    function renderAnimals(){
        return animals.map((animals) => <tb>animals</tb>)
        // return animals.map((value) =>{
        //         <tr key={treatmentHistoryId}>
        //             <td>{treatmentHistoryId}</td>
        //             <td>{treatmentId}</td>
        //             <td>{animalId}</td>
        //             <td>{date}</td>
        //             <td>{requestedBy}</td>
        //             <td>{acceptedBy}</td>
        //             {/*<td><Button onClick={(e)=>approveRequest(treatmentHistoryId)} variant="success">Accept</Button></td>*/}
        //         </tr>
        //
        // })
    }

    function renderHeaders(){
        const headers =["CommentId", "UserId", "Description","Date"]
        return headers.map((header)=>{
            return<th> {header}</th>
        })
    }

    function renderTableBody(){
        return comments.map((value,key) =>{
            const {commentId, userId, description, date} = value
            return(
                <tr key={commentId}>
                    <td>{commentId}</td>
                    <td>{userId}</td>
                    <td>{description}</td>
                    <td>{date}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <Navbar variant="light" expand={false} bg="white">
                <Container fluid>
                    <Navbar.Brand >
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
                                <Button variant="info" href="/AdminTeachingRequestManagement" >
                                    Teacher Request Management
                                </Button><br/>
                                <Button variant="info" href="/AdminAnimalManagement" >Animal Management</Button><br/>
                                <Button variant="info" href="/PersonalSettings" >Personal Settings</Button><br/>
                                <Button variant="info" href="/UserManagement" >User Management</Button><br/>
                                <Button variant="secondary" href="/" >Logout</Button>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar><br/>
            <Container fluid>
                <Row className="justify-content-sm-start">
                    <Col xs>
                        <h1>
                            {animalName}
                        </h1>
                    </Col>
                    <Col md>
                        <h1>
                            Status: {animalStatus}
                        </h1>

                    </Col>
                    <Col sm="2" className="justify-content-end">
                        <h1>
                            ID # {animalId}
                        </h1>
                    </Col>
                </Row>
            </Container ><br/>
            <Container fluid>
                <Row>
                    <Col>
                        <Table variant="dark" striped bordered hover  id="profileTable">
                            <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>Value</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/*{renderAnimals()}*/}
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                            <Tab.Content >
                                <Tab.Pane eventKey="first">
                                    <InputGroup className="mb-3 flex-sm-wrap">
                                        <FormControl
                                            placeholder="Enter Comment Here"
                                            aria-label="Recipient's username"
                                            aria-describedby="Submit Comment"
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                        <Button variant="success" id="Submit Comment" onClick={addComment}>
                                            Submit
                                        </Button>
                                    </InputGroup>
                                    {/*<input  placeholder="Enter Comment Here" onChange={(e) => setDescription(e.target.value)}></input>*/}
                                    {/*<Button  variant="success" type="submit" onClick={addComment}>Submit</Button>*/}

                                    <Table variant="dark" striped bordered hover id="commentTable">
                                        <thead>
                                        {renderHeaders()}
                                        </thead>
                                        <tbody>
                                        {renderTableBody()}
                                        </tbody>
                                    </Table>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    {/*<h100 className="AdminAnimalProfile-photo-item1">SparkyPhoto1.png</h100>*/}
                                    {/*<h101 className="AdminAnimalProfile-photo-item2">SparkyPhoto2.png</h101>*/}
                                    {/*<h102 className="AdminAnimalProfile-photo-item3">SparkyPhoto3.png</h102>*/}
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Table striped bordered hover className="AdminAnimalProfile-grid-item100">
                                        <thead>
                                        <tr>
                                            <th scope="col">Treatment</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Physical Exam</td>
                                            <td>2021-11-24</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Table striped bordered hover className="AdminAnimalProfile-grid-item100">
                                        <thead>
                                        <tr>
                                            <th scope="col">prescriptionId</th>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Drug Name</th>
                                            <th scope="col">Instructions</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Calvin</td>
                                            <td>Advil</td>
                                            <td>Take 2 every 4 hours</td>
                                            <td>2021-10-10</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <Table striped bordered hover className="AdminAnimalProfile-grid-item100">
                                        <thead>
                                        <tr>
                                            <th scope="col">requestId</th>
                                            <th scope="col">adminApproved</th>
                                            <th scope="col">technicianApproved</th>
                                            <th scope="col">Complete</th>
                                            <th scope="col">Successful</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>false</td>
                                            <td>false</td>
                                            <td>false</td>
                                            <td>false</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Tab.Pane>
                            </Tab.Content>
                            <Nav variant="pills"  >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Comments</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Photos</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Diagnoses</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Prescriptions</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Requests</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
