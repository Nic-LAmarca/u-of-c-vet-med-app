import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import {Tab, Tabs} from 'react-tabs';

import {Button, Form, Dropdown, DropdownButton, Table, ListGroup} from "react-bootstrap";
import axios from "axios";
import './AnimalProfileStudent.css';
import DropdownItem from "react-bootstrap/DropdownItem";


export default function AnimalProfileStudentDashboard() {
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
    //     await axios.post('http://localhost:8080/AnimalPDashboard',
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
    //     await axios.post('http://localhost:8080/AnimalPashboard',
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

        <div className="AnimalP-grid-container">
            <h3 className="AnimalP-grid-item1">
                Animal A
            </h3>
            <h3 className="AnimalP-grid-item2">
                ID#
            </h3>
            <h3 className="AnimalP-grid-item3">
                Animal Status
            </h3>
            <Table striped bordered hover className="AnimalP-grid-item5">
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>Animal A</td>

                </tr>
                <tr>
                    <td>ID# </td>
                    <td>1234567</td>

                </tr>
                <tr>
                    <td>Weight</td>
                    <td>11.08 Kg</td>

                </tr>
                <tr>
                    <td>Tattoo#</td>
                    <td> 7654321</td>

                </tr>
                </tbody>
            </Table>
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">

                </Tab>
                <Tab eventKey="profile" title="Profile">

                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    
                </Tab>
            </Tabs>

        </div>
    );
}
