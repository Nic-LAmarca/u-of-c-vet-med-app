import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Col, Row, Badge, Form, InputGroup, Dropdown, DropdownButton, ListGroup, Table, Navbar, Container, Image,Offcanvas,Nav,NavDropdown,FormControl} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import axios from "axios";
import './AdminNavigation.css';
import images from "./Images/vetmed.png";

export default function AdminNavigation() {
    let [animals,setAnimals] = useState([]);
    const [animalName, setAnimalName] = useState("");
    const [animalSpecies, setAnimalSpecies] = useState("");
    //const [animalBreed, setAnimalBreed] = useState("");
    const [animalStatus, setAnimalStatus] = useState("");

    const history = useNavigate();

    allAnimals();

    async function personalSettings(event) {
        event.preventDefault();
        history('/PersonalSettings');
    }

    async function userManagement(event) {
        event.preventDefault();
        history('/UserManagement');
    }

    async function teacherRequestManagement(event) {
        event.preventDefault();
        history('/TeacherRequestManagement');
    }

    async function animalManagement(event) {
        event.preventDefault();
        history('/AnimalManagement');
    }

    async function logout(event) {
        event.preventDefault();
        history('/');
    }

    async function selectAnimal(event) {
        event.preventDefault();
        console.log("Here")
        window.localStorage.setItem("animal", 12)
        history('/AdminAnimalProfile');
    }

    async function allAnimals() {
        await axios.get('http://localhost:8080/animals',
            null,
            )
            .then(function(response){

                const animalList = response.data
                setAnimals(animalList)
                //window.localStorage.setItem("allAnimals", animalList)
                //window.localStorage.setItem("animalCount", animalList.length)

                var table = document.getElementById("table");
                if(table.rows.length <= 1){
                    const animalList = response.data
                    window.localStorage.setItem("animalCount", animalList.length)
                    var j = 1;
                    for(var i = 0; i < animalList.length; i++){
                        var temp = animalList[i]
                        var row = table.insertRow(i+1)
                        for(var k = 0; k < 11; k++){
                            row.insertCell(k)
                        }
                        table.rows[j].cells[0].innerHTML = temp.animalId
                        table.rows[j].cells[1].innerHTML = temp.animalName
                        table.rows[j].cells[2].innerHTML = temp.species
                        table.rows[j].cells[3].innerHTML = temp.breed
                        table.rows[j].cells[4].innerHTML = temp.sex
                        table.rows[j].cells[5].innerHTML = temp.statusType
                        table.rows[j].cells[6].innerHTML = temp.available
                        table.rows[j].cells[7].innerHTML = temp.location
                        table.rows[j].cells[8].innerHTML = temp.alert
                        table.rows[j].cells[9].innerHTML = temp.color
                        table.rows[j].cells[10].innerHTML = '<input id="Button" type="button" onClick="selectAnimal" value="Select" />'
                        j = j + 1
                    }
                }
            })
            .catch(function(error){
                console.log(error);
            }
        );
    }

    async function searchAnimals(event) {
        event.preventDefault();

        console.log(animalName)
        console.log(animalSpecies)
        console.log(animalStatus)

        await axios.get('http://localhost:8080/filteredAnimals',
        //null,
            {
                params: {
                    animalName: animalName,
                    animalSpecies: animalSpecies,
                    animalStatus: animalStatus
                }
            })
            .then(function(response){
                const filteredAnimalList = response.data
                 console.log(filteredAnimalList)
                var table = document.getElementById("table");
                var j = 1;
                for(var i = 1; i < table.rows.length; i++){
                    table.deleteRow(i)
                }
                for(var i = 0; i < filteredAnimalList.length; i++){
                    var temp = filteredAnimalList[i]
                    var row = table.insertRow(i+1)
                    for(var k = 0; k < 11; k++){
                        row.insertCell(k)
                    }
                    table.rows[j].cells[0].innerHTML = temp.animalId
                    table.rows[j].cells[1].innerHTML = temp.animalName
                    table.rows[j].cells[2].innerHTML = temp.species
                    table.rows[j].cells[3].innerHTML = temp.breed
                    table.rows[j].cells[4].innerHTML = temp.sex
                    table.rows[j].cells[5].innerHTML = temp.statusType
                    table.rows[j].cells[6].innerHTML = temp.available
                    table.rows[j].cells[7].innerHTML = temp.location
                    table.rows[j].cells[8].innerHTML = temp.alert
                    table.rows[j].cells[9].innerHTML = temp.color
                    table.rows[j].cells[10].innerHTML = '<input id="Button" type="button" onClick={selectAnimal} value="Select" />'
                    j = j + 1
                }
            })
            .catch(function(error){
                console.log(error);
            }
        );
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
                                    <Badge className="ms-2" bg = "danger">8</Badge>
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



            <div>
                <Container fluid>
                    <Row className="flex-lg-wrap">
                        <Col lg="3">

                            <InputGroup className="me-2" >

                                {/*<Form.Label>Animal Name</Form.Label>*/}
                                <Form.Control
                                    autoFocus
                                    placeholder="Animal Name"
                                     value = {animalName}
                                     onChange =  {(e) => setAnimalName(e.target.value)}



                                    // type="username"
                                    // value={username}
                                />

                            </InputGroup><br/>
                        </Col>
                        {/*<Col className="mx-auto">*/}
                            {/*<Dropdown className="d-inline me-4" autoClose="outside"  onSelect = {e => this.setSpecies(e.target.value)} >*/}
                            {/*    <DropdownToggle*/}
                            {/*        id = "dropdown-autoclose-false"*/}
                            {/*        variant="secondary"*/}
                            {/*    >*/}
                            {/*        Species*/}
                            {/*    </DropdownToggle>*/}
                            {/*    <DropdownMenu >*/}
                            {/*        <Form.Check*/}
                            {/*            type="checkbox"*/}
                            {/*            id="checkbox"*/}
                            {/*            label="Chicken Noodle Soup"*/}
                            {/*            className="mx-3"*/}

                            {/*        />*/}
                            {/*        <Form.Check*/}
                            {/*            type="checkbox"*/}
                            {/*            id="checkbox"*/}
                            {/*            label="Seggs"*/}
                            {/*            className="mx-3"*/}
                            {/*        />*/}
                            {/*    </DropdownMenu>*/}
                            {/*</Dropdown >*/}
                            {/*<Dropdown className="d-inline me-4" autoClose="outside"  onSelect = {e => this.setBreed(e.target.value)} >*/}
                            {/*    <DropdownToggle id = "dropdown-autoclose-false" variant="secondary">*/}
                            {/*        Breed*/}
                            {/*    </DropdownToggle>*/}
                            {/*    <DropdownMenu >*/}
                            {/*        <Form.Check*/}
                            {/*            type="checkbox"*/}
                            {/*            id="checkbox"*/}
                            {/*            label="Soup Soup"*/}
                            {/*            className="mx-3"*/}
                            {/*        />*/}
                            {/*        <Form.Check*/}
                            {/*            type="checkbox"*/}
                            {/*            id="checkbox"*/}
                            {/*            label="Seggsy"*/}
                            {/*            className="mx-3"*/}
                            {/*        />*/}
                            {/*    </DropdownMenu>*/}
                            {/*</Dropdown >*/}
                            {/*<Dropdown className="d-inline me-4" autoClose="outside" onSelect = {e => this.setStatus(e.target.value)}>*/}
                            {/*    <DropdownToggle id = "dropdown-autoclose-false" variant="secondary">*/}
                            {/*        Status*/}
                            {/*    </DropdownToggle>*/}

                            {/*    <DropdownMenu className="me-auto">*/}

                            {/*        <Form.Check*/}
                            {/*            type="checkbox"*/}
                            {/*            id="checkbox"*/}
                            {/*            label="Warning"*/}
                            {/*            className="mx-3"*/}
                            {/*        />*/}
                            {/*        <Form.Check*/}
                            {/*            type="checkbox"*/}
                            {/*            id="checkbox"*/}
                            {/*            label="Fine"*/}
                            {/*            className="mx-3"*/}
                            {/*        />*/}
                            {/*        <Form.Check*/}
                            {/*            type="checkbox"*/}
                            {/*            id="checkbox"*/}
                            {/*            label="Urgent"*/}
                            {/*            className="mx-3"*/}
                            {/*        />*/}
                            {/*    </DropdownMenu>*/}
                            {/*</Dropdown>*/}
                        <Col lg="3">

                            <InputGroup className="me-2"  >

                                {/*<Form.Label>Animal Name</Form.Label>*/}
                                <Form.Control
                                    autoFocus
                                    placeholder="Species"
                                     value = {animalSpecies}
                                     onChange =  {(e) => setAnimalSpecies(e.target.value)}
                                />

                            </InputGroup><br/>
                            </Col>
                        <Col lg="3">

                            <InputGroup className="me-2"  >

                                {/*<Form.Label>Animal Name</Form.Label>*/}
                                <Form.Control
                                    autoFocus
                                    placeholder="Status"
                                     value = {animalStatus}
                                     onChange =  {(e) => setAnimalStatus(e.target.value)}



                                    // type="username"
                                    // value={username}
                                />

                            </InputGroup><br/>

                        </Col>
                        {/*<Col className="mx-auto">*/}
                        {/*    */}
                        {/*</Col>*/}
                        {/*<Col className="mx-auto">*/}
                        {/*    */}
                        {/*</Col>*/}
                    </Row><br/>

                    <Button onClick= {searchAnimals} >Search By Filter</Button>

                        <Row xs ={"auto"}>
                    </Row><br/>
                </Container>
            </div>



                <h1>
                    Results
                </h1>
                <Table responsive striped bordered hover id="table">
                    <thead>
                    <tr>
                        <th>animalId</th>
                        <th>animalName</th>
                        <th>species</th>
                        <th>breed</th>
                        <th>sex</th>
                        <th>statusType</th>
                        <th>available</th>
                        <th>location</th>
                        <th>alert</th>
                        <th>color</th>
                        <th>select</th>
                    </tr>
                    </thead>
                </Table>
            </Container>

        </div>
    );
}
