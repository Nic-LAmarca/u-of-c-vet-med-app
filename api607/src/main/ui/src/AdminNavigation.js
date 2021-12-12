import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button,Badge, Form, Dropdown, DropdownButton, ListGroup, Table, Navbar, Container, Image,Offcanvas,Nav,NavDropdown,FormControl} from "react-bootstrap";
import axios from "axios";
import './AdminNavigation.css';
import DropdownItem from "react-bootstrap/DropdownItem";
import images from "./Images/vetmed.png";
import FormComp from "./Components/FormComp";
import TableComp from "./Components/TableComp";

export default function AdminNavigation() {
    let [animals,setAnimals] = useState([]);
    const [animalName, setAnimalName] = useState("");
    const [animalSpecies, setAnimalSpecies] = useState("");
    const [animalBreed, setAnimalBreed] = useState("");
    const [animalStatus, setAnimalStatus] = useState("");

    const history = useNavigate();

    var userId = window.localStorage.getItem('userId')
    console.log(userId)

    window.onload = function() {
        allAnimals();
    };

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
        history('/AdminAnimalProfile');
    }

    async function allAnimals() {
        await axios.get('http://localhost:8080/animals',
            null,
            )
            .then(function(response){
                const animalList = response.data
                window.localStorage.setItem("animalCount", animalList.length)
                var table = document.getElementById("table");
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
                    table.rows[j].cells[10].innerHTML = '<input id="Button" type="button" href="/AdminAnimalProfile" value="Select" />'
                    j = j + 1
                }
            })
            .catch(function(error){
                console.log(error);
            }
        );
    }

    async function searchAnimals(event) {
        event.preventDefault();
        setAnimalName(window.localStorage.getItem("name"))
        setAnimalSpecies(window.localStorage.getItem("species"))
        setAnimalBreed(window.localStorage.getItem("breed"))
        setAnimalStatus(window.localStorage.getItem("status"))
        await axios.get('http://localhost:8080/animals',
            null,
            {
                params: {
                    animalName,
                    animalSpecies,
                    animalBreed,
                    animalStatus
                }
            })
            .then(function(response){
                const animalList = response.data
                window.localStorage.setItem("animalCount", animalList.length)
                var table = document.getElementById("table");
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
                    table.rows[j].cells[10].innerHTML = '<input id="Button" type="button" href="/AdminAnimalProfile" value="Select" />'
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
                    <Navbar.Brand href = "#home" >
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
                                <Button variant="info" href="#action1" onClick={personalSettings}>Personal Settings</Button><br/>
                                <Button variant="info" href="#action2" onClick={userManagement}>User Management</Button><br/>
                                <Button variant="info" href="#action2" onClick={teacherRequestManagement}>
                                    Teacher Request Management
                                    <Badge className="ms-2" bg = "danger">8</Badge>
                                </Button><br/>
                                <Button variant="info" href="#action" onClick={animalManagement}>Animal Management</Button><br/>
                                <Button variant="secondary" href="#action2" onClick={logout}>Logout</Button>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Container fluid>
                <FormComp/><br/>
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
