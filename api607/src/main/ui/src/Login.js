import React,{useState} from "react";
import {Form, Button, Container, Navbar, Image, NavbarBrand, Row, Col} from "react-bootstrap";
import './Login.css';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import images from "./Images/vetmed.png";
import blacklogo from "./Images/blacklogo.png";

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
                window.localStorage.setItem('userType',userType)
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
        <div>
            <Navbar variant="light" expand={false} bg="white">
                <Container fluid>
                    <Navbar.Brand>
                        <Image className="d-inline-block align-top tr" src={images} fluid/>
                    </Navbar.Brand>
                </Container>
            </Navbar><br/>
                <Container fluid className="justify-content-md-center">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalEmail">
                            <Form.Label column sm={2}>Email</Form.Label>
                            <Col sm={5}>
                                <Form.Control
                                    autoFocus
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="justify-content-center mb-3" controlId="formHoizontalPassword">
                            <Form.Label column sm={2}>Password</Form.Label>
                            <Col sm={5}>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Col>

                        </Form.Group>
                    </Form><br/>
                    <Container fluid className="d-grid gap-5 d-lg-flex justify-content-md-center">
                        <Button tyblock variant="dark" size="lg" type="submit" onClick={handleSubmit} disabled={!validateForm()}>
                            Login
                        </Button>
                    </Container>
                </Container>
        </div>
    );
}