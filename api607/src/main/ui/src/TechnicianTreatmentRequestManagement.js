import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {
    Button,
    Form,
    Dropdown,
    DropdownButton,
    Navbar,
    Container,
    Image,
    Offcanvas,
    Nav,
    Badge,
    Table
} from "react-bootstrap";
import axios from "axios";
import './TechnicianTreatmentRequestManagement.css';
import DropdownItem from "react-bootstrap/DropdownItem";
import images from "./Images/vetmed.png";


export default function TechnicianTreatmentRequestManagement() {
    let [requests,setRequests] = useState([]);
    const [requestId, setRequestId] = useState();
    const [requestMessage, setRequestMessage] = useState('');
    const [isLoading,setLoading] = useState(true);
    const [disabled, setDisabled] = useState(false);

    const history = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/technicianTreatmentRequests',
            null
        )
            .then(function(response){
                setRequests(response.data)

            })
            .catch(function(error){
                // setLoading(false)
                console.log(error);
            })
    },[])

    function renderTableBody(){
        return requests.map((value,key) =>{
<<<<<<< HEAD
            const { acceptedBy,animalId,date,requestedBy,treatmentId} = value
            return(

                <tr key={treatmentId}>
                    <td>{treatmentId}</td>
                    <td>{acceptedBy}</td>
                    <td>{animalId}</td>
                    <td>{date}</td>
                    <td>{requestedBy}</td>
                    <td><Button onClick={approveRequest} disabled={disabled} variant="success">{disabled ? 'Accepted' : 'Accept'}</Button></td>

=======
            const {treatmentHistoryId, treatmentId, animalId, date, requestedBy, acceptedBy} = value
            return(
                <tr key={treatmentHistoryId}>
                    <td>{treatmentHistoryId}</td>
                    <td>{treatmentId}</td>
                    <td>{animalId}</td>
                    <td>{date}</td>
                    <td>{requestedBy}</td>
                    <td>{acceptedBy}</td>
                    if(1 == 1){
                            <div>
                                <td><Button onClick={(e)=>approveRequest(treatmentHistoryId)} variant="success">Accept</Button></td>
                            </div>
                    }
>>>>>>> cg
                </tr>


            )
        })
    }

    function renderHeaders(){
<<<<<<< HEAD
        const headers =["TreatmentId", "AcceptedBy","AnimalId","Date","RequestedBy","Response"]
        console.log(headers)
=======
        const headers =["TreatmentHistoryId", "TreatmentId", "AnimalId","Date","RequestedBy", "AcceptedBy", "Response"]
>>>>>>> cg
        return headers.map((header)=>{
            return<th> {header}</th>
        })


    }

<<<<<<< HEAD
    // async function renderHeaders(){
    //     const header = Object.keys(requests[0])
    //     console.log(header)
    //     return header.map((key,value) =>{
    //         return <th key={value}>{key.toUpperCase()}</th>
    //     })
    // }

    async function approveRequest(event) {
        event.preventDefault();
        console.log("working")
        // await axios.post('http://localhost:8080/technicianRequestApproval',
        //     null,
        //     {
        //         params: {
        //             requestId
        //         }
        //     })
        //     .then(function(response){
        //         setRequestId();
        //         console.log(response.data);
        //         setRequestMessage(response.data);
        //         setDisabled(true);
        //     })
        //     .catch(function(error){
        //         console.log(error);
        //     });
=======
    async function approveRequest(requestId) {
        var userId = window.localStorage.getItem("userId")
        axios.post('http://localhost:8080/technicianRequestApproval',
             null,
             {
                 params: {
                     userId,
                     requestId
                 }
             })
             .then(function(response){
             console.log(response.data)
                setRequests(response.data)
                 setRequestId();
                 setRequestMessage(response.data);
                 setDisabled(true);
             })
             .catch(function(error){
                 console.log(error);
             });;
>>>>>>> cg
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
        <div>
            <Navbar variant="light" expand={false} bg="white">
                <Container fluid>
                    <Navbar.Brand>
                        <Image href = "/TechnicianNavigation" className="d-inline-block align-top tr" src={images} fluid/>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        Technician Treatment Request
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
                                <Button variant="info" href="/UserManagement" >User Management</Button><br/>
                                <Button variant="info" href="TechnicianTeachingRequestManagement" >
                                    Teaching Request Management
                                </Button><br/>
                                <Button variant="info" href="/TechnicianTreatmentRequestManagement" >
                                    Treatment Request Management
                                </Button><br/>
                                <Button variant="secondary" href="/" >Logout</Button>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar><br/>
            <Container>
                <Table id = "requests" striped bordered hover responsive>
                    <thead>
                    {renderHeaders()}
                    </thead>
                    <tbody>
                    {renderTableBody()}
                    </tbody>


                </Table>
            </Container>
        </div>
    );
}
