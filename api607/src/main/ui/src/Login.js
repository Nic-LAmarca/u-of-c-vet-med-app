import React,{useState} from "react";
import {Form,Button} from "react-bootstrap";
import './Login.css';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        await axios.post('http://localhost:8080/login',
            null,
            {
                params: {
                    email,
                    password
                }
            })
            .then(function(response){
                if(response.data == "Administrator"){
                    history("/AdminNavigationPage");
                }
                else if(response.data == "Animal Health Attendant"){
                    history("/AttendantNavigationPage");
                }
                else if(response.data == "Animal Health Technician"){
                    history("/TechnicianNavigationPage");
                }
                else if(response.data == "Student"){
                    history("/StudentNavigationPage");
                }
                else if(response.data == "Teaching Technician"){
                    history("/TeacherNavigationPage");
                }
            })
            .catch(function(error){
                console.log(error);
            }
        );
    }

    return (
        <div className="Login">
            <h1> Login Page </h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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