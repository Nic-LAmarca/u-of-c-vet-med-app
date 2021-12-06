 import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form, Dropdown, DropdownButton, Table, ListGroup,Tabs,Tab,TabContent,TabContainer,Nav,NavItem,Row,Col} from "react-bootstrap";
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
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >

                <div className="AnimalP-grid-item7">
                <Nav variant="pills"  >
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                </Nav>
                </div>
                <div >
                    <Tab.Content >
                        <Tab.Pane eventKey="first">
                            hi hello
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            hello hello
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>
            {/*<Tab.Container id="left-tabs-example" defaultActiveKey="first" >*/}
            {/*    <Row className="AnimalP-grid-item7">*/}
            {/*        <Col sm={3}>*/}
            {/*            <Nav variant="pills" className="flex-column">*/}
            {/*                <Nav.Item>*/}
            {/*                    <Nav.Link eventKey="first">Tab 1</Nav.Link>*/}
            {/*                </Nav.Item>*/}
            {/*                <Nav.Item>*/}
            {/*                    <Nav.Link eventKey="second">Tab 2</Nav.Link>*/}
            {/*                </Nav.Item>*/}
            {/*            </Nav>*/}
            {/*        </Col>*/}
            {/*        <Col sm={9}>*/}
            {/*            <Tab.Content>*/}
            {/*                <Tab.Pane eventKey="first">*/}
            {/*                    hi hello*/}
            {/*                </Tab.Pane>*/}
            {/*                <Tab.Pane eventKey="second">*/}
            {/*                    hello hello*/}
            {/*                </Tab.Pane>*/}
            {/*            </Tab.Content>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Tab.Container>*/}

        </div>
    );
}
