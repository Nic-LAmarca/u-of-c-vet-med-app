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
                var userString = response.data
                const userArray = userString.split("-")
                var userId = userArray[0]
                var userType = userArray[1]
                window.localStorage.setItem('userId',userId)
                if(userType == "Administrator"){
                    history("/AdminNavigation");
                }
                else if(userType== "Animal Health Attendant"){
                    history("/AttendantNavigation");
                }
                else if(userType == "Animal Health Technician"){
                    history("/TeacherNavigation");
                }
                else if(userType == "Student"){
                    history("/StudentNavigation");
                }
                else if(userType == "Teaching Technician"){
                    history("/TeacherNavigation");
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