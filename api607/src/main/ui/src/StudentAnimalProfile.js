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
import logo from "./Images/vetmed.png";


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

    // *********************************************************
    // ****** SECTION USED FOR Rendering Tables ******
    // *********************************************************
    function renderCommentHeaders(){
        const headers =["CommentId", "UserId", "Description","Date"]
        return headers.map((header)=>{
            return(

                <th> {header}</th>

            )

        })
    }

    function renderCommentTable(){
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
                        <Image className="d-inline-block align-top" src={logo} fluid/>
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

                                    <Table responsive variant="dark" striped bordered hover id="commentTable">
                                        <thead>
                                        <tr>
                                            {renderCommentHeaders()}
                                        </tr>

                                        </thead>
                                        <tbody>
                                        {renderCommentTable()}
                                        </tbody>
                                    </Table>
                                </Tab.Pane>

                            </Tab.Content>
                            <Nav variant="pills"  >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Comments</Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
