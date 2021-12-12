 import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form,Dropdown,DropdownButton,Table} from "react-bootstrap";
import axios from "axios";
import './UserManagement.css';
import DropdownItem from "react-bootstrap/DropdownItem";


export default function UserManagement() {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");

    async function addUser(event) {
        event.preventDefault();
        var theUserType = window.localStorage.getItem("userType");
        await axios.post('http://localhost:8080/addUser',
            null,
            {
                params: {
                    fName,
                    lName,
                    email,
                    userType,
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

        async function blockUser(event) {
            event.preventDefault();
            var theUserType = window.localStorage.getItem("userType");
            await axios.post('http://localhost:8080/blockUser',
                null,
                {
                    params: {
                        email,
                        password,
                    }
                })
                .then(function(response){
                    console.log(response)
                })
                .catch(function(error){
                    console.log(error);
                })
            }

        async function removeUser(event) {
            event.preventDefault();
            var theUserType = window.localStorage.getItem("userType");
            console.log(fName)
            await axios.post('http://localhost:8080/removeUser',
                null,
                {
                    params: {
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
        <div className="UserManagement-grid-container">
            <h1 className ="UserManagement-grid-item1">
                User Management
            </h1>
            <Form className="UserManagement-grid-item2">
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        autoFocus
                        onInput={e=>setFName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        autoFocus
                        onInput={e=>setLName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        onInput={e=>setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        autoFocus
                        onInput={e=>setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>User Type (e.g. Admin, Teacher, Technician etc.)</Form.Label>
                    <Form.Control
                        autoFocus
                        onInput={e=>setUserType(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <Button className = "UserManagement-grid-item3" onClick={addUser}>Add User</Button>
            <Button className = "UserManagement-grid-item4" onClick={blockUser}>Block User</Button>
            <Button className = "UserManagement-grid-item5" onClick={removeUser}>Remove User</Button>
        </div>
    );
}
