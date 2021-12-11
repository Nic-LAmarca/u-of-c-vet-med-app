import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form,Dropdown,DropdownButton} from "react-bootstrap";
import axios from "axios";
import './AdminTeachingRequestManagement.css';
import DropdownItem from "react-bootstrap/DropdownItem";


export default function AdminDashboard() {
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
        await axios.get('http://localhost:8080/adminNewRequests', json,
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
        await axios.post('http://localhost:8080/adminRequestApproval',
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
            await axios.post('http://localhost:8080/adminRequestDenial',
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

        <div className="AdminD-grid-container">
            <div className="AdminD-grid-item1">
                <h1> Admin Dashboard </h1>
            </div>
            <div className="AdminD-grid-item2">
                <Button variant="light" onClick={handleLogout}>Logout</Button>
                {/*<input*/}
                {/*    type = "Button"*/}
                {/*    value = "Logout"*/}
                {/*    onClick={handleLogout}*/}
                {/*/>*/}
            </div>
            <br/><br/>
            <DropdownButton className= "AdminD-grid-item3" id="dropdown-basic-button" title="Requests" onClick={dropDown} alignRight>
                {/*<Dropdown.Item href="#/action-1">A</Dropdown.Item>*/}
                {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*/}
                {/*<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                <ul>
                    {requests.map(requests => <DropdownItem onClick={handleRequestSelect}>{requests}</DropdownItem>)}
                </ul>
            </DropdownButton>
            <p className="AdminD-grid-item5">
                Request Selected: {requestId}
            </p>
            <Button className="AdminD-grid-item4" onClick={approveRequest} variant="info">Approve Request</Button>
            <Button className="AdminD-grid-item6" onClick={denyRequest} variant="danger">Deny Request</Button>
            <b className="AdminD-grid-item7">
                Request Approved/Cancelled: {requestMessage}
            </b>
        </div>
    );
}