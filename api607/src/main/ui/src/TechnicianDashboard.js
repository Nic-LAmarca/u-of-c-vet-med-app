import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form,Dropdown,DropdownButton} from "react-bootstrap";
import axios from "axios";
import './TechnicianDashboard.css';
import DropdownItem from "react-bootstrap/DropdownItem";


export default function TechnicianDashboard() {
    let [requests,setRequests] = useState([]);
    const [requestId, setRequestId] = useState();
    const [requestMessage, setRequestMessage] = useState('');

    const history = useNavigate();

    async function handleLogout(event) {
        event.preventDefault();
        history('/');
    }

    async function dropDown() {
        const json = {
        };
        await axios.get('http://localhost:8080/technicianNewRequests', json,
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

    async function handleRequestSelect(event){
        event.preventDefault();
        event.persist();
        setRequestId(event.target.text);
        setRequestMessage();
    }

    async function approveRequest(event) {
        event.preventDefault();
        await axios.post('http://localhost:8080/technicianRequestApproval',
            null,
            {
                params: {
                    requestId
                }
            })
            .then(function(response){
                setRequestId();
                console.log(response.data);
                setRequestMessage(response.data);
            })
            .catch(function(error){
                console.log(error);
            });
        }

        async function denyRequest(event) {
            event.preventDefault();
            await axios.post('http://localhost:8080/technicianRequestDenial',
                null,
                {
                    params: {
                        requestId
                    }
                })
                .then(function(response){
                    setRequestId();
                    setRequestMessage(response.data);
                })
                .catch(function(error){
                    console.log(error);
                });
            }

    return (

        <div className="TechnicianD-grid-container">
            <div className="TechnicianD-grid-item1">
                <h1> Technician DashBoard </h1>
            </div>
            <div className="TechnicianD-grid-item2">
                <Button variant="light" onClick={handleLogout}>Logout</Button>
                {/*<input*/}
                {/*    type = "Button"*/}
                {/*    value = "Logout"*/}
                {/*    onClick={handleLogout}*/}
                {/*/>*/}
            </div>
            <br/><br/>
            <DropdownButton className= "TechnicianD-grid-item3" id="dropdown-basic-button" title="Requests" onClick={dropDown} alignRight>
                {/*<Dropdown.Item href="#/action-1">A</Dropdown.Item>*/}
                {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*/}
                {/*<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                <ul>
                    {requests.map(requests => <DropdownItem onClick={handleRequestSelect}>{requests}</DropdownItem>)}
                </ul>
            </DropdownButton>
            <p className="TechnicianD-grid-item5">
                Request Selected: {requestId}
            </p>
            <Button className="TechnicianD-grid-item4" onClick={approveRequest} variant="info">Approve Request</Button>
            <Button className="TechnicianD-grid-item6" onClick={denyRequest} variant="danger">Cancel Request</Button>
            <b className="TechnicianD-grid-item7">
                Request Approved/Cancelled: {requestMessage}
            </b>
        </div>
    );
}
