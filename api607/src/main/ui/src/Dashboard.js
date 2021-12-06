import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import './Dashboard.css';
import {Button, Form} from "react-bootstrap";

export default function Dashboard() {

    const history = useNavigate();

    async function handleLogout(event) {
        event.preventDefault();
        history('/Login');
    }

    return (
        <div>
            Welcome User! <br/><br/>
            <input
                type = "Button"
                value = "Logout"
                onClick={handleLogout}
            />
        </div>

    );
}
