
import React, {Component, useState} from 'react';

import {Button, Col, Container, Dropdown, DropdownButton, Form, Row,InputGroup} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";

async function Hello(){
    const [animalName,setAnimalName] = useState();
}

class FormComp extends Component {
    setName(e)
    {
        var name = e;
        window.localStorage.setItem("name",e);
    }
    setSpecies(e)
    {
        var species = e;
        window.localStorage.setItem("species",e);
    }
    setBreed(e)
    {
        var breed = e;
        window.localStorage.setItem("breed",e);
    }
    setStatus(e)
    {
        var status = e;
        window.localStorage.setItem("status",e);
    }

    render() {


        return (
            <div>
                <Container fluid>
                    <Row className="flex-lg-wrap">
                        <Col lg="3">
                            <InputGroup className="me-2"  onChange =  {e => this.setName(e.target.value)} >
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
                            <Dropdown className="d-inline me-4" autoClose="outside"  onSelect = {e => this.setSpecies(e.target.value)} >
                                <DropdownToggle
                                    id = "dropdown-autoclose-false"
                                    variant="secondary"
                                >
                                    Species
                                </DropdownToggle>
                                <DropdownMenu >/
                                    <Form.Check
                                        type="checkbox"
                                        id="checkbox"
                                        label="Chicken Noodle Soup"
                                        className="mx-3"

                                    />
                                    <Form.Check
                                        type="checkbox"
                                        id="checkbox"
                                        label="Seggs"
                                        className="mx-3"
                                    />
                                </DropdownMenu>
                            </Dropdown >
                            <Dropdown className="d-inline me-4" autoClose="outside"  onSelect = {e => this.setBreed(e.target.value)} >
                                <DropdownToggle id = "dropdown-autoclose-false" variant="secondary">
                                    Breed
                                </DropdownToggle>
                                <DropdownMenu >
                                    <Form.Check
                                        type="checkbox"
                                        id="checkbox"
                                        label="Soup Soup"
                                        className="mx-3"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        id="checkbox"
                                        label="Seggsy"
                                        className="mx-3"
                                    />
                                </DropdownMenu>
                            </Dropdown >
                            <Dropdown className="d-inline me-4" autoClose="outside" onSelect = {e => this.setStatus(e.target.value)}>
                                <DropdownToggle id = "dropdown-autoclose-false" variant="secondary">
                                    Status
                                </DropdownToggle>

                                <DropdownMenu className="me-auto">

                                    <Form.Check
                                        type="checkbox"
                                        id="checkbox"
                                        label="Warning"
                                        className="mx-3"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        id="checkbox"
                                        label="Fine"
                                        className="mx-3"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        id="checkbox"
                                        label="Urgent"
                                        className="mx-3"
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