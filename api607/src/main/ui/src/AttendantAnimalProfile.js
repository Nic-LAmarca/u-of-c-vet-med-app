import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form, Dropdown, DropdownButton, Table, ListGroup,Tabs,Tab,TabContent,TabContainer,Nav,NavItem,Row,Col} from "react-bootstrap";

import axios from "axios";
import './AttendantAnimalProfile.css';
import DropdownItem from "react-bootstrap/DropdownItem";


export default function AnimalProfileStudentDashboard() {
    return (
        <div className="AttAnimalP-grid-container">
            <h3 className="AttAnimalP-grid-item1">
                Sparky
            </h3>
            <h3 className="AttAnimalP-grid-item2">
                ID # 1
            </h3>
            <h3 className="AttAnimalP-grid-item3">
                Status: Healthy
            </h3>
            <Table striped bordered hover className="AttAnimalP-grid-item5">
                <tbody>
                <tr>
                    <td>ID# </td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>Sparky</td>
                </tr>
                <tr>
                    <td>Species</td>
                    <td>Dog</td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td>3.6Kg</td>
                </tr>
                <tr>
                    <td>Tattoo Number</td>
                    <td>234234</td>
                </tr>
                <tr>
                    <td>City Tattoo</td>
                    <td>HOC London</td>
                </tr>
                <tr>
                    <td>Birth Date</td>
                    <td>2018-08-15</td>
                </tr>
                <tr>
                    <td>Breed</td>
                    <td>Beagle</td>
                </tr>
                <tr>
                    <td>Sex</td>
                    <td>MN</td>
                </tr>
                <tr>
                    <td>RFID</td>
                    <td>197839178371</td>
                </tr>
                <tr>
                    <td>Microchip</td>
                    <td>176387613813</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>Healthy</td>
                </tr>
                <tr>
                    <td>Available</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>Purpose</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Region</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Subspecies</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Color</td>
                    <td>Brown, black, White</td>
                </tr>
                </tbody>
            </Table>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >

                <div className="AttAnimalP-grid-item7">
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
                <div className="AttAnimalP-grid-item6">
                    <Tab.Content >
                        <Tab.Pane eventKey="first">
                        <input className="AttAnimalP-comment-item1" placeholder="Enter Comment Here"></input>
                        <button className="AttAnimalP-submit-item1" type="submit">Submit</button>

                            <Table striped bordered hover className="AttAnimalP-grid-item100">
                                <thead>
                                    <tr>
                                        <th scope="col">commentId</th>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Calvin</td>
                                        <td>Sparky looks healthy</td>
                                        <td>2021-11-24</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <h100 className="AttAnimalP-photo-item1">SparkyPhoto1.png</h100>
                            <h101 className="AttAnimalP-photo-item2">SparkyPhoto2.png</h101>
                            <h102 className="AttAnimalP-photo-item3">SparkyPhoto3.png</h102>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Table striped bordered hover className="AttAnimalP-grid-item100">
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
                        <Table striped bordered hover className="AttAnimalP-grid-item100">
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
                        <Table striped bordered hover className="AttAnimalP-grid-item100">
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
