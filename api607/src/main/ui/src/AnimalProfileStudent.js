import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form, Dropdown, DropdownButton, Table, ListGroup,Tabs,Tab,TabContent,TabContainer,Nav,NavItem,Row,Col} from "react-bootstrap";

import axios from "axios";
import './AnimalProfileStudent.css';
import DropdownItem from "react-bootstrap/DropdownItem";


export default function AnimalProfileStudentDashboard() {
    return (
        <div className="AnimalP-grid-container">
            <h3 className="AnimalP-grid-item1">
                Sparky
            </h3>
            <h3 className="AnimalP-grid-item2">
                ID # 1
            </h3>
            <h3 className="AnimalP-grid-item3">
                Status: Healthy
            </h3>
            <Table striped bordered hover className="AnimalP-grid-item5">
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

                <div className="AnimalP-grid-item7">
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
                        <Nav.Link eventKey="fifth">Alerts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="sixth">Requests</Nav.Link>
                    </Nav.Item>
                </Nav>
                </div>
                <div className="AnimalP-grid-item6">
                    <Tab.Content >
                        <Tab.Pane eventKey="first">
                            <Table striped bordered hover className="AnimalP-grid-item100">
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
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Table striped bordered hover className="AnimalP-grid-item100">
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
                        <Tab.Pane eventKey="fourth">
                        <Table striped bordered hover className="AnimalP-grid-item100">
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
                    <Tab.Pane eventKey="fifth">
                        <Table striped bordered hover className="AnimalP-grid-item100">
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
                    <Tab.Pane eventKey="sixth">
                        <Table striped bordered hover className="AnimalP-grid-item100">
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
                    </Tab.Content>
                </div>
            </Tab.Container>
        </div>
    );
}
