 import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form,Dropdown,DropdownButton,Table} from "react-bootstrap";
import axios from "axios";
import './AdminAnimalManagement.css';
import DropdownItem from "react-bootstrap/DropdownItem";


export default function AdminAnimalManagement() {
    return (
        <div className="AdminAnimalManagement-grid-container">
            <h1 className ="AdminAnimalManagement-grid-item1">
                Animal Management
            </h1>
            <Form className="AdminAnimalManagement-grid-item2">
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        autoFocus
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        autoFocus
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        autoFocus
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>User Type (e.g. Admin, Teacher, Technician etc.)</Form.Label>
                    <Form.Control
                        autoFocus
                    />
                </Form.Group>
            </Form>
            <Button className = "AdminAnimalManagement-grid-item3">Add User</Button>
            <Button className = "AdminAnimalManagement-grid-item4">Block User</Button>
            <Button className = "AdminAnimalManagement-grid-item5">Remove User</Button>
        </div>
    );
}
