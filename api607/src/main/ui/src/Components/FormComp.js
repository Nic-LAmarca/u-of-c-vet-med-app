import React, {Component, useState} from 'react';
import {Button, DropdownButton, Form} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";

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


            </div>
        );
    }
}

export default FormComp;