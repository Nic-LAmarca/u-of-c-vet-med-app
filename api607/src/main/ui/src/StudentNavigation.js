import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form,Dropdown,DropdownButton,Table} from "react-bootstrap";
import axios from "axios";
import './StudentNavigation.css';
import DropdownItem from "react-bootstrap/DropdownItem";



export default function StudentNavigation() {

    const history = useNavigate();

    async function handleLogout(event) {
        event.preventDefault();
        history('/');
    }

    async function personalSettings(event) {
        event.preventDefault();
        history('/PersonalSettings');
    }

    async function selectAnimal(event) {
        event.preventDefault();
        history('/StudentAnimalProfile');
    }

    return (
        <div className="StudentNavigation-grid-container">
            <div className="StudentNavigation-grid-item1">
                <h1>Student Navigation</h1>
            </div>
            <div className="StudentNavigation-grid-item2">
                <Button variant="light" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="StudentNavigation-grid-item3">
                <Button variant="light" onClick={personalSettings}>Personal Settings</Button>
            </div>

            <div className="StudentNavigation-grid-item4">
                <h3>Animal Profile Selection</h3>
            </div>

            <Table striped bordered hover className="StudentNavigation-grid-item5">
                <thead>
                    <tr>
                        <th scope="col">animalId</th>
                        <th scope="col">animalName</th>
                        <th scope="col">species</th>
                        <th scope="col">weight</th>
                        <th scope="col">tattooNum</th>
                        <th scope="col">cityTattoo</th>
                        <th scope="col">birthDate</th>
                        <th scope="col">breed</th>
                        <th scope="col">sex</th>
                        <th scope="col">rfid</th>
                        <th scope="col">microchip</th>
                        <th scope="col">statusType</th>
                        <th scope="col">available</th>
                        <th scope="col">location</th>
                        <th scope="col">alert</th>
                        <th scope="col">purpose</th>
                        <th scope="col">region</th>
                        <th scope="col">subspecies</th>
                        <th scope="col">color</th>
                        <th scope="col">distinguishingFeatures</th>
                        <th scope="col">Select</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Calvin</td>
                        <td>Sparky looks healthy</td>
                        <td>2021-11-24</td>
                        <td>
                            <Button variant="light" onClick={selectAnimal}>Select</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
