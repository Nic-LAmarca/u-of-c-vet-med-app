import React, {Component} from 'react';
import {Table} from "react-bootstrap";

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
                        <th>color</th>
                        <th>select</th>
                    </tr>
                    </thead>
                </Table>
            </div>
        );
    }
}

export default TableComp;