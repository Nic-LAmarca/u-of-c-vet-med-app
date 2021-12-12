import React, {Component} from 'react';
import {Button, Col, Container, Dropdown, DropdownButton, Form, Row,InputGroup} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";

class FormComp extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="flex-lg-wrap">
                        <Col lg="3">
                            <InputGroup className="me-2" >
                                {/*<Form.Label>Animal Name</Form.Label>*/}
                                <Form.Control
                                    autoFocus
                                    placeholder="Animal Name"
                                    // type="username"
                                    // value={username}
                                />

                            </InputGroup><br/>
                        </Col>
                        <Col className="mx-auto">
                            <Dropdown className="d-inline me-4" autoClose="outside">
                                <DropdownToggle
                                    id = "dropdown-autoclose-false"
                                    variant="secondary"
                                >
                                    Species
                                </DropdownToggle>
                                <DropdownMenu >
                                    <Form.Check
                                        type="checkbox"
                                        id="checkbox"
                                        label="Chicken Noodle Soup"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        id="checkbox"
                                        label="Seggs"
                                    />
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown className="d-inline me-4" autoClose="outside">
                                <DropdownToggle id = "dropdown-autoclose-false" variant="secondary">
                                    Breed
                                </DropdownToggle>
                                <DropdownMenu>
                                    <Form.Check
                                        type="checkbox"
                                        id="checkbox"
                                        label="Soup Soup"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        id="checkbox"
                                        label="Seggsy"
                                    />
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown className="d-inline me-4" autoClose="outside">
                                <DropdownToggle id = "dropdown-autoclose-false" variant="secondary">
                                    Status
                                </DropdownToggle>
                                <DropdownMenu>
                                    <Form.Check
                                        type="checkbox"
                                        id="checkbox"
                                        label="Warning"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        id="checkbox"
                                        label="Fine"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        id="checkbox"
                                        label="Urgent"
                                    />
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                        {/*<Col className="mx-auto">*/}
                        {/*    */}
                        {/*</Col>*/}
                        {/*<Col className="mx-auto">*/}
                        {/*    */}
                        {/*</Col>*/}
                    </Row><br/>
                    <Button>Search By Filter</Button>

                        <Row xs ={"auto"}>

                    </Row><br/>

                </Container>

            </div>
        );
    }
}

export default FormComp;