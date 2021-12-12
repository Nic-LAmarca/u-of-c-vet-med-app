 import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form,Dropdown,DropdownButton,Table} from "react-bootstrap";
import axios from "axios";
import './PersonalSettings.css';
import DropdownItem from "react-bootstrap/DropdownItem";


export default function PersonalSettings() {
    return (
        <div className="PersonalSettings-grid-container">
            <h1 className ="PersonalSettings-grid-item1">
                Personal Settings
            </h1>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHoizontalUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        // type="username"
                        // value={username}
                    />
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHoizontalEmail">
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
            <Button className = "PersonalSettings-grid-item3">Save</Button>
        </div>
    );
}
