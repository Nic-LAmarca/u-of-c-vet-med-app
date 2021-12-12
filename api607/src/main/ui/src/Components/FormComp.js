import React, {Component, useState} from 'react';
import {Button, DropdownButton, Form} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";

class FormComp extends Component {

    const [animalName, setAnimalName] = useState("");
    const [animalSpecies, setAnimalSpecies] = useState("");
    const [animalBreed, setAnimalBreed] = useState("");
    const [animalStatus, setAnimalStatus] = useState("");

    render() {
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label onChange="setAnimal"{e=>()setAnimalName(e.target.value)}>Animal Name</Form.Label>
                        <Form.Control
                            autoFocus
                            // type="username"
                            // value={username}

                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label onChange={e=>()setAnimalSpecies(e.target.value)}>Animal Species</Form.Label>
                        <Form.Control
                            autoFocus
                            // type="username"
                            // value={username}

                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label onChange={e=>()setAnimalBreed(e.target.value)}>Animal Breed</Form.Label>
                        <Form.Control
                            autoFocus
                            // type="username"
                            // value={username}

                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label onChange={e=>()setAnimalStatus(e.target.value)}>Animal Status</Form.Label>
                        <Form.Control
                            autoFocus
                            // type="username"
                            // value={username}

                        />
                    </Form.Group><br/>
                    <Button className onClick="setSearchParameters(animalName, animalSpecies, animalBreed, animalStatus)">Search</Button>
                </Form>
                <DropdownButton>
                    <DropdownItem>
                        <Form.Check
                            type="checkbox"
                            id="checkbox"
                            label="checkbox"
                        />
                    </DropdownItem>
                </DropdownButton>
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