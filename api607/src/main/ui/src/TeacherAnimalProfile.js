import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button,Form,Dropdown,DropdownButton,Table,ListGroup,Tabs,Tab,TabContent,TabContainer,Nav,NavItem,Row,Col,Navbar, Container, Image, Offcanvas,InputGroup,FormControl} from "react-bootstrap";
import axios from "axios";
import './AdminAnimalProfile.css';
import DropdownItem from "react-bootstrap/DropdownItem";
import logo from "./Images/vetmed.png";

export default function AdminAnimalProfile() {
    const [animalId, setAnimalId] = useState(window.localStorage.getItem("animal"));
    const [animalName, setAnimalName] = useState("");
    const [animalSpecies, setAnimalSpecies] = useState("");
    const [animalStatus, setAnimalStatus] = useState("");
    const [description, setDescription] = useState("");
    const [comments, setComments] = useState([]);
    let [animals, setAnimals] = useState([]);
    const [images,setImages] = useState([]);
    const [treatments,setTreatments] = useState([]);
    const [prescriptions,setPrescriptions] = useState([]);
    const [requests,setRequests] = useState([]);
    const [statusHistories,setStatusHistories] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:8080/searchForAnimal',
            null,
            {
                params: {
                    animalId
                }
            })
            .then(function(response){
                console.log(response)
                setAnimals(Array.from(response.data))
                var table = document.getElementById("profileTable");
                const animalFound = response.data
                setAnimalName(animalFound.animalName)
                setAnimalSpecies(animalFound.animalSpecies)
                setAnimalStatus(animalFound.statusType)
                if(table.rows.length <= 1){
                    for(var i = 1; i < 17; i++){
                        var row = table.insertRow(i)
                        for(var j = 0; j < 2; j++){
                            row.insertCell(j)
                        }
                    }
                    table.rows[1].cells[0].innerHTML = "Species"
                    table.rows[2].cells[0].innerHTML = "Weight"
                    table.rows[3].cells[0].innerHTML = "Tattoo Number"
                    table.rows[4].cells[0].innerHTML = "City Tattoo"
                    table.rows[5].cells[0].innerHTML = "Birth Date"
                    table.rows[6].cells[0].innerHTML = "Breed"
                    table.rows[7].cells[0].innerHTML = "Sex"
                    table.rows[8].cells[0].innerHTML = "RFID"
                    table.rows[9].cells[0].innerHTML = "Microchip"
                    table.rows[10].cells[0].innerHTML = "Location"
                    table.rows[11].cells[0].innerHTML = "Alert"
                    table.rows[12].cells[0].innerHTML = "Purpose"
                    table.rows[13].cells[0].innerHTML = 'Region'
                    table.rows[14].cells[0].innerHTML = "Subspecies"
                    table.rows[15].cells[0].innerHTML = "Color"
                    table.rows[16].cells[0].innerHTML = "Distinguishing Features"
                    table.rows[1].cells[1].innerHTML = animalFound.species
                    table.rows[2].cells[1].innerHTML = animalFound.weight
                    table.rows[3].cells[1].innerHTML = animalFound.tattooNum
                    table.rows[4].cells[1].innerHTML = animalFound.cityTattoo
                    table.rows[5].cells[1].innerHTML = animalFound.birthDate
                    table.rows[6].cells[1].innerHTML = animalFound.breed
                    table.rows[7].cells[1].innerHTML = animalFound.sex
                    table.rows[8].cells[1].innerHTML = animalFound.rfid
                    table.rows[9].cells[1].innerHTML = animalFound.microchip
                    table.rows[10].cells[1].innerHTML = animalFound.location
                    table.rows[11].cells[1].innerHTML = animalFound.alert
                    table.rows[12].cells[1].innerHTML = animalFound.purpose
                    table.rows[13].cells[1].innerHTML = animalFound.region
                    table.rows[14].cells[1].innerHTML = animalFound.subspecies
                    table.rows[15].cells[1].innerHTML = animalFound.color
                    table.rows[16].cells[1].innerHTML = animalFound.distinguishingFeatures
                }
            })
            .catch(function(error){
                console.log(error);
            })
            axios.post('http://localhost:8080/comments',
            null,
            {
                params: {
                    animalId
                }
            })
            .then(function(response){
                setComments(response.data)
            })
            .catch(function(error){
                console.log(error);
            })
            axios.post('http://localhost:8080/animalImages',
                null,
                {
                    params:{
                        animalId
                    }
                })
                .then(function(response){
                    setImages(response.data)
                })
                .catch(function(error){
                    console.log(error);
                })
            axios.post('http://localhost:8080/animalTreatmentHistory',
                null,
                {
                    params:{
                        animalId
                    }
                })
                .then(function(response){
                    setTreatments(response.data)
                })
                .catch(function(error){
                    console.log(error);
                })
            axios.post('http://localhost:8080/animalPrescriptions',
                null,
                {
                    params:{
                        animalId
                    }
                })
                .then(function(response){
                    setPrescriptions(response.data)
                })
                .catch(function(error){
                    console.log(error);
                })
            axios.post('http://localhost:8080/animalRequest',
                null,
                {
                    params:{
                        animalId
                    }
                })
                .then(function(response){
                    setRequests(response.data)
                })
                .catch(function(error){
                    console.log(error);
                })
          axios.post('http://localhost:8080/animalStatus',
            null,
            {
                params:{
                    animalId
                }
            })
            .then(function(response){
                setStatusHistories(response.data)
            })
            .catch(function(error){
                console.log(error);
            })

        },[])

    async function addComment(event) {
        event.preventDefault();
        var userId = window.localStorage.getItem("userId");
        await axios.post('http://localhost:8080/addComment',
        null,
        {
            params: {
                userId,
                animalId,
                description
            }
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // *********************************************************
    // ****** SECTION USED FOR Rendering Tables ******
    // *********************************************************
    function renderCommentHeaders(){
        const headers =["CommentId", "UserId", "Description","Date"]
        return headers.map((header)=>{
            return(
                    <th> {header}</th>
            )
        })
    }

    function renderCommentTable(){
        return comments.map((value,key) =>{
            const {commentId, userId, description, date} = value
            return(
                <tr key={commentId}>
                    <td>{commentId}</td>
                    <td>{userId}</td>
                    <td>{description}</td>
                    <td>{date}</td>
                </tr>
            )
        })
    }

    function renderTreatmentHeaders(){
        const headers =["TreatmentHistoryId","TreatmentId", "Date", "Requested By", "Accepted By"]
        return headers.map((header)=>{
            return(
                <th> {header}</th>
            )
        })
    }

    function renderTreatmentTable(){
        return treatments.map((value,key) =>{
            const {treatmentHistoryId, treatmentId, date, requestedBy, acceptedBy} = value
            return(
                <tr key={treatmentHistoryId}>
                    <td>{treatmentHistoryId}</td>
                    <td>{treatmentId}</td>
                    <td>{date}</td>
                    <td>{requestedBy}</td>
                    <td>{acceptedBy}</td>
                </tr>
            )
        })
    }

    function renderPrescriptionHeaders(){
        const headers =["PrescriptionId", "User Id", "Date", "Drug Name","Instructions","Dosage", "Delivery Method"]
        return headers.map((header)=>{
            return(
                <th> {header}</th>
            )
        })
    }

    function renderPrescriptionTable(){
        return prescriptions.map((value,key) =>{
            const {prescriptionId, userId, date, drugName, instructions, dosage, deliveryMethod} = value
            return(
                <tr key={prescriptionId}>
                    <td>{prescriptionId}</td>
                    <td>{userId}</td>
                    <td>{date}</td>
                    <td>{drugName}</td>
                    <td>{instructions}</td>
                    <td>{dosage}</td>
                    <td>{deliveryMethod}</td>
                </tr>
            )
        })
    }

    function renderRequestHeaders(){
        const headers =["RequestId", "Requested By", "AdminApproved", "TechnicianApproved","Complete","Successful", "Request Date"]
        return headers.map((header)=>{
            return(
                <th> {header}</th>
            )
        })
    }

    function renderRequestTable(){
        return requests.map((value,key) =>{
            const {requestId, userId, adminApproved, technicianApproved, requestComplete, requestSuccessful, requestDate} = value
            return(
                <tr key={requestId}>
                    <td>{requestId}</td>
                    <td>{userId}</td>
                    <td>{adminApproved}</td>
                    <td>{technicianApproved}</td>
                    <td>{requestComplete}</td>
                    <td>{requestSuccessful}</td>
                    <td>{requestDate}</td>
                </tr>
            )
        })
    }

    function renderStatusHistoryHeaders(){
        const headers =["Status Id","Date", "Description", "locations", "Status Type", "Image Id"]
        return headers.map((header)=>{
            return(
                <th> {header}</th>
            )
        })
    }

    function renderStatusHistoryTable(){
        return statusHistories.map((value,key) =>{
            const {statusId, date, description, locations, statusType, imageid} = value
            return(
                <tr key={statusId}>
                    <td>{statusId}</td>
                    <td>{date}</td>
                    <td>{description}</td>
                    <td>{locations}</td>
                    <td>{statusType}</td>
                    <td>{imageid}</td>
                </tr>
            )
        })
    }
    function renderImage(){
        return images.map((value,key) =>{
            const{imageId,userId,creationDate,file,animalId,type} = value
            return(
                <Image className="w-50" src={(file)} fluid/>
            )
        })
    }

    return (
        <div>
            <Navbar variant="light" expand={false} bg="white">
                <Container fluid>
                    <Navbar.Brand >
                        <Image className="d-inline-block align-top" src={logo} fluid/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar"/>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar me-auto"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">{window.localStorage.getItem("username")}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Button variant="info" href="/AdminTeachingRequestManagement" >
                                    Teacher Request Management
                                </Button><br/>
                                <Button variant="info" href="/TeacherNavigation" >Navigation Screen</Button><br/>
                                <Button variant="info" href="/PersonalSettings" >Personal Settings</Button><br/>
                                <Button variant="info" href="/TeacherUserManagement" >User Management</Button><br/>
                                <Button variant="info" href="/TeacherTeachingRequest" >
                                    Teaching Requests
                                </Button><br/>
                                <Button variant="secondary" href="/" >Logout</Button>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar><br/>
            <Container fluid>
                <Row className="justify-content-sm-start">
                    <Col xs>
                        <h1>
                            {animalName}
                        </h1>
                    </Col>
                    <Col md>
                        <h1>
                            Status: {animalStatus}
                        </h1>

                    </Col>
                    <Col sm="2" className="justify-content-end">
                        <h1>
                            ID # {animalId}
                        </h1>
                    </Col>
                </Row>
            </Container ><br/>
            <Container fluid>
                <Row>
                    <Col>
                        <Table variant="dark" striped bordered hover  id="profileTable">
                            <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>Value</th>
                            </tr>
                            </thead>
                        </Table>
                    </Col>
                    <Col>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                            <Tab.Content >
                                <Tab.Pane eventKey="first">
                                    <InputGroup className="mb-3 flex-sm-wrap">
                                        <FormControl
                                            placeholder="Enter Comment Here"
                                            aria-label="Recipient's username"
                                            aria-describedby="Submit Comment"
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                        <Button variant="success" id="Submit Comment" onClick={addComment}>
                                            Submit
                                        </Button>
                                    </InputGroup>
                                    <Table responsive variant="dark" striped bordered hover id="commentTable">
                                        <thead>
                                        <tr>
                                            {renderCommentHeaders()}
                                        </tr>

                                        </thead>
                                        <tbody>
                                        {renderCommentTable()}
                                        </tbody>
                                    </Table>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    {renderImage()}
                                    {/*<h100 className="AdminAnimalProfile-photo-item1">SparkyPhoto1.png</h100>*/}
                                    {/*<h101 className="AdminAnimalProfile-photo-item2">SparkyPhoto2.png</h101>*/}
                                    {/*<h102 className="AdminAnimalProfile-photo-item3">SparkyPhoto3.png</h102>*/}
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Table responsive variant="dark" striped bordered hover className="AdminAnimalProfile-grid-item100">
                                        <thead>
                                        <tr>
                                            {renderTreatmentHeaders()}
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {renderTreatmentTable()}
                                        </tbody>
                                    </Table>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Table responsive variant="dark" striped bordered hover className="AdminAnimalProfile-grid-item100">
                                        <thead>
                                        <tr>
                                            {renderPrescriptionHeaders()}
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {renderPrescriptionTable()}
                                        </tbody>
                                    </Table>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <Table responsive variant="dark" striped bordered hover className="AdminAnimalProfile-grid-item100">
                                        <thead>
                                        <tr>
                                            {renderRequestHeaders()}
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {renderRequestTable()}
                                        </tbody>
                                    </Table>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                    <Table responsive variant="dark" striped bordered hover className="AdminAnimalProfile-grid-item100">
                                        <thead>
                                        <tr>
                                            {renderStatusHistoryHeaders()}
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {renderStatusHistoryTable()}
                                        </tbody>
                                    </Table>
                                </Tab.Pane>
                            </Tab.Content>
                            <Nav variant="pills"  >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Comments</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Photos</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Treatments</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Prescriptions</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Requests</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">Status History</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
