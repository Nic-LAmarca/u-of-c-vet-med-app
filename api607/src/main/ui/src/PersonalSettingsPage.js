 import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form,Dropdown,DropdownButton,Table} from "react-bootstrap";
import axios from "axios";
import './PersonalSettingsPage.css';
import DropdownItem from "react-bootstrap/DropdownItem";


export default function PersonalSettingsDashboard() {
    // let [animals,setAnimals] = useState([]);
    // const [requestAnimalId, setRequestAnimalId] = useState();
    // const [requestAnimal, setRequestAnimal] = useState('');
    // let [requests,setRequests] = useState([]);
    // const [cancelRequestId, setCancelRequestId] = useState();
    // const [cancelRequest, setCancelRequest] = useState('');
    //
    //
    // const history = useNavigate();
    //
    // async function handleLogout(event) {
    //     event.preventDefault();
    //     history('/');
    // }
    //
    // // *** All for Animal ***
    // async function dropDown(event) {
    //         const json = {
    //         };
    //         await axios.get('http://localhost:8080/NavAAvailableAnimals', json,
    //         {
    //             headers: {
    //             'content-type': 'application/json'
    //             }
    //         })
    //         .then(function(response){
    //             setAnimals(response.data);
    //         })
    //         .catch(function(error){
    //             console.log(error);
    //         });
    //     }
    //
    //     async function handleSelect(event){
    //         event.preventDefault();
    //         event.persist();
    //         setRequestAnimalId(event.target.text);
    //     }
    //
    // async function makeRequest(event) {
    //     event.preventDefault();
    //     await axios.post('http://localhost:8080/NavADashboard',
    //         null,
    //         {
    //             params: {
    //                 requestAnimalId
    //             }
    //         })
    //         .then(function(response){
    //             setRequestAnimal(response.data);
    //         })
    //         .catch(function(error){
    //             console.log(error);
    //         });
    // }
    // // *** All for Animal ***
    //
    // // *** All for Request ***
    // async function cancelDropDown(event) {
    //         const json = {
    //         };
    //         await axios.get('http://localhost:8080/NavAAvailableRequests', json,
    //         {
    //             headers: {
    //             'content-type': 'application/json'
    //             }
    //         })
    //         .then(function(response){
    //             setRequests(response.data);
    //         })
    //         .catch(function(error){
    //             console.log(error);
    //         });
    //     }
    //
    //     async function handleCancelSelect(event){
    //         event.preventDefault();
    //         event.persist();
    //         setCancelRequestId(event.target.text);
    //     }
    //
    // async function CancelRequest(event) {
    //     event.preventDefault();
    //     await axios.post('http://localhost:8080/NavADashboard',
    //         null,
    //         {
    //             params: {
    //                 cancelRequestId
    //             }
    //         })
    //         .then(function(response){
    //             setCancelRequest(response.data);
    //         })
    //         .catch(function(error){
    //             console.log(error);
    //         });
    // }
    // // *** All for Request ***

    return (

        <div className="NavAD-grid-container">
            <h1 className ="NavAD-grid-item1">
                Personal Settings
            </h1>
            <Form className="NavAD-grid-item6">
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        // type="username"
                        // value={username}

                    />
                </Form.Group>
                <Button>Edit</Button>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        // type="username"
                        // value={username}

                    />
                </Form.Group>
                <Button>Edit</Button>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        autoFocus
                        // type="username"
                        // value={username}

                    />
                </Form.Group>
                <Button>Edit</Button>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        autoFocus
                        // type="username"
                        // value={username}

                    />
                </Form.Group>
                <Button>Edit</Button>

            </Form>
            <Button className = "NavAD-grid-item3">Save</Button>



        </div>
    );
}
