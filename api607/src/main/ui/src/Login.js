import React,{useState} from "react";
import {Form,Button} from "react-bootstrap";
import './Login.css';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const json = {
            "username": username,
            "password": password
        };
        await axios.post('http://localhost:8080/login', json,
        {
            headers: {
            'content-type': 'application/json'
            }
        })
        .then(function(response){
            console.log(response)
            if(response.data == "Teaching Technician"){
                history("/TeacherNavigationPage");
            }
            else if(response.data == "Administrator"){
                history("/AdminNavigationPage");
            }
            else if(response.data == "Animal Health Technician"){
                history("/TechnicianNavigationPage");
            }
            else if(response.data == "Student"){
                history("/TechnicianNavigationPage");
            }
            else if(response.data == "Animal Health Attendant"){
                history("/AttendantNavigationPage");
            }
        })
        .catch(function(error){
            console.log(error);
        });
    }

    return (
        <div className="Login">
            <h1> Login Page </h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="username">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button   tyblock size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    );
}