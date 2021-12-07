 import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form,Dropdown,DropdownButton} from "react-bootstrap";
import axios from "axios";
import './TeacherDashboard.css';
import DropdownItem from "react-bootstrap/DropdownItem";


export default function TeacherDashboard() {
    let [animals,setAnimals] = useState([]);
    const [requestAnimalId, setRequestAnimalId] = useState();
    const [requestAnimal, setRequestAnimal] = useState('');
    let [requests,setRequests] = useState([]);
    const [cancelRequestId, setCancelRequestId] = useState();
    const [cancelRequest, setCancelRequest] = useState('');


    const history = useNavigate();

    async function handleLogout(event) {
        event.preventDefault();
        history('/');
    }

    // *** All for Animal ***
    async function dropDown(event) {
            const json = {
            };
            await axios.get('http://localhost:8080/teacherAvailableAnimals', json,
            {
                headers: {
                'content-type': 'application/json'
                }
            })
            .then(function(response){
                setAnimals(response.data);
            })
            .catch(function(error){
                console.log(error);
            });
        }

        async function handleSelect(event){
            event.preventDefault();
            event.persist();
            setRequestAnimalId(event.target.text);
        }

    async function makeRequest(event) {
        event.preventDefault();
        await axios.post('http://localhost:8080/TeacherDashboard',
            null,
            {
                params: {
                    requestAnimalId
                }
            })
            .then(function(response){
                setRequestAnimal(response.data);
            })
            .catch(function(error){
                console.log(error);
            });
    }
    // *** All for Animal ***

    // *** All for Request ***
    async function cancelDropDown(event) {
            const json = {
            };
            await axios.get('http://localhost:8080/teacherAvailableRequests', json,
            {
                headers: {
                'content-type': 'application/json'
                }
            })
            .then(function(response){
                setRequests(response.data);
            })
            .catch(function(error){
                console.log(error);
            });
        }

        async function handleCancelSelect(event){
            event.preventDefault();
            event.persist();
            setCancelRequestId(event.target.text);
        }

    async function CancelRequest(event) {
        event.preventDefault();
        await axios.post('http://localhost:8080/TeacherDashboard',
            null,
            {
                params: {
                    cancelRequestId
                }
            })
            .then(function(response){
                setCancelRequest(response.data);
            })
            .catch(function(error){
                console.log(error);
            });
    }
    // *** All for Request ***

    return (

        <div className="TeacherD-grid-container">
            <div className="TeacherD-grid-item1">
                <h1> Teacher Dashboard </h1>
            </div>
            <div className="TeacherD-grid-item2">
                <Button variant="light" onClick={handleLogout}>Logout</Button>
                {/*<input*/}
                {/*    type = "Button"*/}
                {/*    value = "Logout"*/}
                {/*    onClick={handleLogout}*/}
                {/*/>*/}
            </div>
            <br/><br/>
            <DropdownButton  className= "TeacherD-grid-item3" id="dropdown-basic-button" title="Animals" onClick={dropDown}  alignRight>
                <Dropdown.Item></Dropdown.Item>
                {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*/}
                {/*<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                <ul>
                    {animals.map(animals => <DropdownItem custom onClick={handleSelect}>{animals}</DropdownItem>)}
                </ul>
            </DropdownButton>
            <b className="TeacherD-grid-item5">
                Animal Selected: {requestAnimalId}
            </b>
            <Button className="TeacherD-grid-item4" onClick={makeRequest} variant="info">Send Request</Button>
            <b className="TeacherD-grid-item6">
                Animal Requested: {requestAnimal}
            </b>
            <br/><br/>
            <DropdownButton  className= "TeacherD-grid-item8" id="dropdown-basic-button" title="Requests" onClick={cancelDropDown}  alignRight>
                <Dropdown.Item></Dropdown.Item>
                {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*/}
                {/*<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                <ul>
                    {requests.map(requests => <DropdownItem custom onClick={handleCancelSelect}>{requests}</DropdownItem>)}
                </ul>
            </DropdownButton>
            <b className="TeacherD-grid-item10">
                Request Selected: {cancelRequestId}
            </b>
            <Button className="TeacherD-grid-item9" onClick={cancelRequest} variant="info">Cancel Request</Button>
            <b className="TeacherD-grid-item11">
                Request Cancelled: {cancelRequest}
            </b>
        </div>
    );
}
