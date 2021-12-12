import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form, Dropdown, DropdownButton, ListGroup, Table, Navbar, Container, Image,Offcanvas,Nav,NavDropdown,FormControl} from "react-bootstrap";
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

//    const changeStates = ()=>{
//        setAnimalName({data});
//    };

    const history = useNavigate();

    window.onload = function() {
        allAnimals();
    };

    async function setSearchParameters(animalName, animalSpecies, animalBreed, animalStatus) {
        setAnimalName(animalName)
        setAnimalSpecies(animalSpecies)
        setAnimalBreed(animalBreed)
        setAnimalStatus(animalStatus)
        "searchAnimals";
    }


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
                    j = j + 1
                }
            })
            .catch(function(error){
                console.log(error);
            }
        );
    }

    var id = window.localStorage.getItem('userId')
    console.log(id)
    return (
        <div>
            <Navbar variant="light" expand={false} bg="white" >
                <Container fluid>
                    <Navbar.Brand href = "#home" >
                        <Image src={images} fluid/>
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
                                <Button variant="info" href="#action2" onClick={teacherRequestManagement}>Teacher Request Management</Button><br/>
                                <Button variant="info" href="#action" onClick={animalManagement}>Animal Management</Button><br/>
                                <Button variant="secondary" href="#action2" onClick={logout}>Logout</Button>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Container><FormComp/><br/><TableComp/></Container>
        </div>
    );
}
