 import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form, Dropdown, DropdownButton, ListGroup, Table, Navbar, Container, Image,Offcanvas,Nav,NavDropdown,FormControl} from "react-bootstrap";
import axios from "axios";
import './AdminNavigation.css';
import DropdownItem from "react-bootstrap/DropdownItem";
 import images from "./Images/vetmed.png";
 import FormComp from "./Components/FormComp";
 import TableComp from "./Components/TableComp";


export default function AdminNavigation() {
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
        <div>
            <Navbar variant="light" expand={false} bg="white" >
                <Container fluid>
                    <Navbar.Brand href = "#home" >
                        <Image src={images} fluid/>
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
                                <Button variant="primary" href="#action1">Personal Settings</Button><br/>
                                <Button variant="info" href="#action2">Edit Users</Button><br/>
                                <Button variant="secondary" href="#action2">Logout</Button>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Container><FormComp/><br/><TableComp/></Container>

        </div>

        // <div>
        //     <Navbar variant="light" expand={false} bg="black" >
        //         <Container fluid>
        //             <Navbar.Brand href = "#home" >
        //                 <Image src={images} fluid/>
        //             </Navbar.Brand>
        //             <Navbar.Toggle aria-controls="offcanvasNavbar"/>
        //             <Navbar.Offcanvas
        //                 id="offcanvasNavbar me-auto"
        //                 aria-labelledby="offcanvasNavbarLabel"
        //                 placement="end"
        //
        //             >
        //                 <Offcanvas.Header closeButton>
        //                     <Offcanvas.Title id="offcanvasNavbarLabel">User Name Here</Offcanvas.Title>
        //                 </Offcanvas.Header>
        //                 <Offcanvas.Body>
        //                     <Nav className="justify-content-end flex-grow-1 pe-3">
        //                         <Button variant="primary" href="#action1">Personal Settings</Button><br/>
        //                         <Button variant="info" href="#action2">Edit Users</Button><br/>
        //                         <Button variant="secondary" href="#action2">Logout</Button>
        //                     </Nav>
        //                 </Offcanvas.Body>
        //             </Navbar.Offcanvas>
        //         </Container>
        //     </Navbar>
        //     {/*<Button className="NavAD-grid-item2" >*/}
        //     {/*    User*/}
        //     {/*</Button>*/}
        //     {/*<Button className="NavAD-grid-item3">*/}
        //     {/*    Personal Settings*/}
        //     {/*</Button>*/}
        //     {/*<Button className="NavAD-grid-item4">*/}
        //     {/*    Edit Users*/}
        //     {/*</Button>*/}
        //     {/*<Button className="NavAD-grid-item5">*/}
        //     {/*    Logout*/}
        //     {/*</Button>*/}
        //
        //     <Form className="NavAD-grid-item6">
        //         <Form.Group>
        //             <Form.Label>Animal Name</Form.Label>
        //             <Form.Control
        //                 autoFocus
        //                 // type="username"
        //                 // value={username}
        //
        //             />
        //         </Form.Group>
        //         <Form.Group>
        //             <Form.Label>Animal Species</Form.Label>
        //             <Form.Control
        //                 autoFocus
        //                 // type="username"
        //                 // value={username}
        //
        //             />
        //         </Form.Group>
        //         <Form.Group>
        //             <Form.Label>Animal Breed</Form.Label>
        //             <Form.Control
        //                 autoFocus
        //                 // type="username"
        //                 // value={username}
        //
        //             />
        //         </Form.Group>
        //         <Form.Group>
        //             <Form.Label>Animal Status</Form.Label>
        //             <Form.Control
        //                 autoFocus
        //                 // type="username"
        //                 // value={username}
        //
        //             />
        //         </Form.Group>
        //         <Button className>Search</Button>
        //     </Form>
        //     <h1 className="NavAD-grid-item13">
        //         Results
        //     </h1>
        //     <Table  className="NavAD-grid-item14" striped bordered hover>
        //         <thead>
        //         <tr>
        //             <th>#</th>
        //             <th>First Name</th>
        //             <th>Last Name</th>
        //             <th>Username</th>
        //         </tr>
        //         </thead>
        //         <tbody>
        //         <tr>
        //             <td>1</td>
        //             <td>Mark</td>
        //             <td>Otto</td>
        //             <td>@mdo</td>
        //         </tr>
        //         <tr>
        //             <td>2</td>
        //             <td>Jacob</td>
        //             <td>Thornton</td>
        //             <td>@fat</td>
        //         </tr>
        //         <tr>
        //             <td>3</td>
        //             <td colSpan="2">Larry the Bird</td>
        //             <td>@twitter</td>
        //         </tr>
        //         </tbody>
        //         {/*<ul>*/}
        //         {/*    {requests.map(requests => <DropdownItem onClick={handleRequestSelect}>{requests}</DropdownItem>)}*/}
        //         {/*</ul>*/}
        //     </Table>
        //
        // </div>

    );
}
