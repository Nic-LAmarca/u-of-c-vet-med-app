import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Form,Dropdown,DropdownButton,Table} from "react-bootstrap";
import axios from "axios";
import './StudentNavigation.css';
import DropdownItem from "react-bootstrap/DropdownItem";

export default function StudentNavigation() {
    return (
        <div className="StudentNavigation-grid-container">
            <div className="StudentNavigation-grid-item1">
                <h1>Student Navigation</h1>
            </div>
        </div>
    );
}
