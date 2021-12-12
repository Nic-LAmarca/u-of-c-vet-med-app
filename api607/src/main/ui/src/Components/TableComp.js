import React, {Component} from 'react';
import {Button, Table} from "react-bootstrap";

class TableComp extends Component {
    render() {
        return (
            <div>
                <h1>
                    Results
                </h1>
                <Table striped bordered hover id="table">
                    <thead>
                    <tr>
                        <th>animalId</th>
                        <th>animalName</th>
                        <th>species</th>
                        <th>breed</th>
                        <th>sex</th>
                        <th>statusType</th>
                        <th>available</th>
                        <th>location</th>
                        <th>alert</th>
                        <th>select</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Calvin</td>
                        <td>Sparky looks healthy</td>
                        <td>2021-11-24</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <Button variant="light" href="/StudentAnimalProfile">Select</Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TableComp;