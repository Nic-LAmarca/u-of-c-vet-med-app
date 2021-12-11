 import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form,Dropdown,DropdownButton,Table} from "react-bootstrap";
import axios from "axios";
import './PersonalSettings.css';
import DropdownItem from "react-bootstrap/DropdownItem";


export default function PersonalSettings() {
    return (
        <div className="Personal-grid-container">
            <h1 className ="Personal-grid-item1">
                Personal Settings
            </h1>
            <Form className="Personal-grid-item2">
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        // type="username"
                        // value={username}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        // type="username"
                        // value={username}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        autoFocus
                        // type="username"
                        // value={username}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        autoFocus
                        // type="username"
                        // value={username}
                    />
                </Form.Group>
            </Form>
            <Button className = "Personal-grid-item3">Save</Button>
        </div>
    );
}
