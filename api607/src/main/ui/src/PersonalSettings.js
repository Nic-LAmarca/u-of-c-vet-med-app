import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form,Dropdown,DropdownButton,Table} from "react-bootstrap";
import axios from "axios";
import './PersonalSettings.css';
import DropdownItem from "react-bootstrap/DropdownItem";


export default function PersonalSettings() {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function updateSettings(event) {
        event.preventDefault();
        var userId = window.localStorage.getItem("userId");
        console.log(fName)
        await axios.post('http://localhost:8080/personalSettings',
            null,
            {
                params: {
                    userId,
                    fName,
                    lName,
                    email,
                    password
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
        <div className="PersonalSettings-grid-container">
            <h1 className ="PersonalSettings-grid-item1">
                Personal Settings
            </h1>

            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHoizontalUsername">

                    <Form.Label onChange={e=>setFName(e.target.value)}>First Name</Form.Label>
                    <Form.Control
                        autoFocus
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label onChange={e=>setLName(e.target.value)}>Last Name</Form.Label>
                    <Form.Control
                        autoFocus
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label onChange={e=>setEmail(e.target.value)}>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label onChange={e=>setPassword(e.target.value)}>Password</Form.Label>
                    <Form.Control
                        autoFocus
                        />
                </Form.Group>
            </Form>
            <Button className = "PersonalSettings-grid-item3" onClick={updateSettings}>Save</Button>
        </div>
    );
}
