import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {
    Button,
    Form,
    Dropdown,
    DropdownButton,
    Table,
    Navbar,
    Container,
    Image,
    Offcanvas,
    Nav,
    Badge
} from "react-bootstrap";
import axios from "axios";
import './StudentNavigation.css';
import DropdownItem from "react-bootstrap/DropdownItem";
import images from "./Images/vetmed.png";
import FormComp from "./Components/FormComp";
import TableComp from "./Components/TableComp";



export default function StudentNavigation() {

    return (
        <div>
            <Navbar variant="light" expand={false} bg="white">
                <Container fluid>
                    <Navbar.Brand>
                        <Image  src={images} fluid/>
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
                                <Button variant="info" href="/PersonalSettings" >Personal Settings</Button><br/>
                                <Button variant="secondary" href="/" >Logout</Button>

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
                        <th>select</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Calvin</td>
                        <td>Sparky looks healthy</td>
                        <td>2021-11-24</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <Button variant="light" href="/StudentAnimalProfile">Select</Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}
