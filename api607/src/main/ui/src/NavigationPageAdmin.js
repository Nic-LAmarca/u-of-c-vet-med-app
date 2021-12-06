 import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form,Dropdown,DropdownButton,ListGroup} from "react-bootstrap";
import axios from "axios";
import './NavigationPageAdmin.css';
import DropdownItem from "react-bootstrap/DropdownItem";


export default function NavADashboard() {
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
                Navigation Page
            </h1>
            <Button className="NavAD-grid-item2">
                User
            </Button>
            <Button className="NavAD-grid-item3">
                Personal Settings
            </Button>
            <Button className="NavAD-grid-item4">
                Edit Users
            </Button>
            <Button className="NavAD-grid-item5">
                Logout
            </Button>

            <Form className="NavAD-grid-item6">
                <Form.Group>
                    <Form.Label>Animal Name</Form.Label>
                    <Form.Control
                        autoFocus
                        // type="username"
                        // value={username}

                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Animal Species</Form.Label>
                    <Form.Control
                        autoFocus
                        // type="username"
                        // value={username}

                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Animal Breed</Form.Label>
                    <Form.Control
                        autoFocus
                        // type="username"
                        // value={username}

                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Animal Status</Form.Label>
                    <Form.Control
                        autoFocus
                        // type="username"
                        // value={username}

                    />
                </Form.Group>
                <Button className>Search</Button>
            </Form>
            <p className="NavAD-grid-item13">
                Results
            </p>
            <ListGroup className="NavAD-grid-item14">
                <ListGroup.Item action href="#link1">
                    Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" >
                    Link 2
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                    This one is a button
                </ListGroup.Item>
                {/*<ul>*/}
                {/*    {requests.map(requests => <DropdownItem onClick={handleRequestSelect}>{requests}</DropdownItem>)}*/}
                {/*</ul>*/}
            </ListGroup>,


        </div>
    );
}
