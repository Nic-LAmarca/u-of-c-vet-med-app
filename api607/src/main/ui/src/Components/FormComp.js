import React, {Component} from 'react';
import {Button, DropdownButton, Form} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";

class FormComp extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Animal Name</Form.Label>
                        <Form.Control
                            autoFocus
                            // type="username"
                            // value={username}

                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Animal Species</Form.Label>
                        <Form.Control
                            autoFocus
                            // type="username"
                            // value={username}

                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Animal Breed</Form.Label>
                        <Form.Control
                            autoFocus
                            // type="username"
                            // value={username}

                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Animal Status</Form.Label>
                        <Form.Control
                            autoFocus
                            // type="username"
                            // value={username}

                        />
                    </Form.Group><br/>
                    <Button className>Search</Button>
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