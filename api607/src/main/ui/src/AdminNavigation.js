 import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form, Dropdown, DropdownButton, ListGroup, Table} from "react-bootstrap";
import axios from "axios";
import './AdminNavigation.css';
import DropdownItem from "react-bootstrap/DropdownItem";


export default function AdminNavigation() {
    return (

        <div className="AdminNavigation-grid-container">
            <h1 className ="AdminNavigation-grid-item1">
                Navigation Page
            </h1>
            <Button className="AdminNavigation-grid-item2" >
                User
            </Button>
            <Button className="AdminNavigation-grid-item3">
                Personal Settings
            </Button>
            <Button className="AdminNavigation-grid-item4">
                Edit Users
            </Button>
            <Button className="AdminNavigation-grid-item5">
                Logout
            </Button>

            <Form className="AdminNavigation-grid-item6">
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
            <h1 className="AdminNavigation-grid-item13">
                Results
            </h1>
            <Table  className="AdminNavigation-grid-item14" striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
                {/*<ul>*/}
                {/*    {requests.map(requests => <DropdownItem onClick={handleRequestSelect}>{requests}</DropdownItem>)}*/}
                {/*</ul>*/}
            </Table>

        </div>
    );
}
