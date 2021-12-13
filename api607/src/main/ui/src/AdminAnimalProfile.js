import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form, Dropdown, DropdownButton, Table, ListGroup,Tabs,Tab,TabContent,TabContainer,Nav,NavItem,Row,Col} from "react-bootstrap";

import axios from "axios";
import './AdminAnimalProfile.css';
import DropdownItem from "react-bootstrap/DropdownItem";


export default function AdminAnimalProfile() {
    const [animalId, setAnimalId] = useState(window.localStorage.getItem("animal"));
    const [animalName, setAnimalName] = useState("");
    const [animalSpecies, setAnimalSpecies] = useState("");
    const [animalStatus, setAnimalStatus] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.post('http://localhost:8080/searchForAnimal',
            null,
            {
                params: {
                    animalId
                }
            })
            .then(function(response){
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
            var table = document.getElementById("commentTable");
            if(table.rows.length <= 1){
                const commentList = response.data
                var j = 1;
                for(var i = 0; i < commentList.length; i++){
                    var temp = commentList[i]
                    var row = table.insertRow(j)
                    for(var k = 0; k < 4; k++){
                        row.insertCell(k)
                    }
                    table.rows[j].cells[0].innerHTML = temp.commentId
                    table.rows[j].cells[1].innerHTML = temp.userId
                    table.rows[j].cells[2].innerHTML = temp.description
                    table.rows[j].cells[3].innerHTML = temp.date
                    j = j + 1
                }
            }
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

    return (
        <div className="AdminAnimalProfile-grid-container">
            <h3 className="AdminAnimalProfile-grid-item1">
                {animalName}
            </h3>
            <h3 className="AdminAnimalProfile-grid-item2">
                Status: {animalStatus}
            </h3>
            <h3 className="AdminAnimalProfile-grid-item3">
                ID # {animalId}
            </h3>
            <Table striped bordered hover className="AdminAnimalProfile-grid-item5" id="profileTable">
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Value</th>
                    </tr>
                </thead>
            </Table>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >

                <div className="AdminAnimalProfile-grid-item7">
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
                </div>
                <div className="AdminAnimalProfile-grid-item6">
                    <Tab.Content >
                        <Tab.Pane eventKey="first">
                        <input className="AdminAnimalProfile-comment-item1" placeholder="Enter Comment Here" onChange={(e) => setDescription(e.target.value)}></input>
                        <button className="AdminAnimalProfile-submit-item1" type="submit" onClick={addComment}>Submit</button>

                            <Table striped bordered hover className="AdminAnimalProfile-grid-item100" id="commentTable">
                                <thead>
                                    <tr>
                                        <th scope="col">commentId</th>
                                        <th scope="col">UserId</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                            </Table>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <h100 className="AdminAnimalProfile-photo-item1">SparkyPhoto1.png</h100>
                            <h101 className="AdminAnimalProfile-photo-item2">SparkyPhoto2.png</h101>
                            <h102 className="AdminAnimalProfile-photo-item3">SparkyPhoto3.png</h102>
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
                </div>
            </Tab.Container>
        </div>
    );
}
