import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    Button,
    Form,
    Dropdown,
    DropdownButton,
    Table,
    ListGroup,
    Tabs,
    Tab,
    TabContent,
    TabContainer,
    Nav,
    NavItem,
    Row,
    Col,
    Navbar,
    Container,
    Image,
    Offcanvas,
    InputGroup,
    FormControl,
    Modal
} from "react-bootstrap";
import axios from "axios";
import './AdminAnimalProfile.css';
import DropdownItem from "react-bootstrap/DropdownItem";
import logo from "./Images/vetmed.png";
import {toast} from "react-toastify";

export default function AdminAnimalProfile() {
    const [animalId, setAnimalId] = useState(window.localStorage.getItem("animal"));
    const [animalName, setAnimalName] = useState("");
    const [animalSpecies, setAnimalSpecies] = useState("");
    const [animalStatus, setAnimalStatus] = useState("");
    const [description, setDescription] = useState("");
    const [comments, setComments] = useState([]);
    let [animals, setAnimals] = useState([]);
    let [images,setImages] = useState([]);
    let [diagnosis,setDiagnosis] = useState([]);
    let [prescription,setPrescription] = useState([]);
    let [request,setRequest] = useState([]);
    let [alert, setAlert] = useState("");
    const [treatments,setTreatments] = useState([]);
    const [prescriptions,setPrescriptions] = useState([]);
    const [requests,setRequests] = useState([]);
    const [statusHistories,setStatusHistories] = useState([]);
    const [fileN, setFile] = useState("");
    const [fileName, setFileName] = useState(null);
    const [drugName, setDrugName] = useState("");
    const [instructions, setInstructions] = useState("");
    const [dosage, setDosage] = useState("");
    const [deliveryMethod, setDeliveryMethod] = useState("");
    const [statusDescription, setStatusDescription] = useState("");
    const [location, setLocation] = useState("");
    const [status, setStatus] = useState("");
    const [statusImageId, setStatusImageId] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);




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
                    console.log(response.data[0])
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

    async function addStatus(event) {
        event.preventDefault();
        var userId = window.localStorage.getItem("userId");
        await axios.post('http://localhost:8080/addStatus',
        null,
        {
            params: {
                animalId,
                statusDescription,
                location,
                status,
                statusImageId
            }
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error);
        })
    }

    async function addPrescription(event) {
        event.preventDefault();
        if (drugName != "" && instructions != "" && dosage > 0 && deliveryMethod != "")
        {
            var userId = window.localStorage.getItem("userId");
            await axios.post('http://localhost:8080/addPrescription',
            null,
            {
                params: {
                    userId,
                    animalId,
                    drugName,
                    instructions,
                    dosage,
                    deliveryMethod
                }
            })
            .then(function(response){
                console.log(response)
            })
            .catch(function(error){
                console.log(error);
            })
        }
        else
        {
            handleShow2()
        }
    }

    async function addImage(event) {
        event.preventDefault();
        var userId = window.localStorage.getItem("userId");
        await axios.post('http://localhost:8080/addImage',
            null,
            {
                params: {
                    userId,
                    fileName,
                    animalId
                }
            })
            .then(function(response){
                console.log(response)
            })
            .catch(function(error){
                console.log(error);
            })
    }


        async function updateAlert(event) {
            await axios.post('http://localhost:8080/animalAlert',
                null,
                {
                    params: {
                        animalId,
                        alert
                    }
                  })
                     .then(function(response){
                    console.log(response)
                    reRenderTable();
                                })
                    .catch(function(error){
                        console.log(error);
                    })

            }



    async function reRenderTable()
    {
     var animalId = window.localStorage.getItem("animal")
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
                    var rowCount = table.rows.length
                    var j = 1;
                    for(var i = 1; i < rowCount; i++){
                    table.deleteRow(j)
                    }
                    for(var i = 1; i < 17; i++){
                        var row = table.insertRow(i)
                        for(var j = 0; j < 2; j++){
                                row.insertCell(j)
                            }
                        }
                    const animalFound = response.data
                    setAnimalName(animalFound.animalName)
                    setAnimalSpecies(animalFound.animalSpecies)
                    setAnimalStatus(animalFound.statusType)
                    setAlert(animalFound.alert)

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

                })
                .catch(function(error){
                    console.log(error);
                })
    }
    const onChange = (e) =>{
        console.log(e.target.files)
        setFile(e.target.value)
        setFileName(e.target.files[0])
    }
    const onUpload = (e) =>{
        e.preventDefault()
        console.log("This is the filename format",fileN);
        const data = new FormData();
        data.append('file',fileName);
        axios.post('http://localhost:8000/upload',data)
            .then((e) => {
                toast.success("Upload Successful")
            })
            .catch((e)=>{
                toast.error("Upload Unsuccessful")
            })
        var userId = window.localStorage.getItem("userId");
        axios.post('http://localhost:8080/addImage',
            null,
            {
                params: {
                    userId,
                    fileN,
                    animalId
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
    function renderImage(){
        return images.map((value,key) =>{
            const{imageId,userId,creationDate,file,animalId,type} = value
            return(
                <Image className="w-50" src={(file)} fluid/>
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
                                <Button variant="info" href="/AttendantNavigation" >Navigation Screen</Button><br/>
                                <Button variant="info" href="/PersonalSettings" >Personal Settings</Button><br/>
                                <Button variant="info" href="AttendantTreatmentRequest" >

                                    Treatment Request Management
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
                      <InputGroup className="mb-3 flex-sm-wrap">
                        <FormControl
                            placeholder="Enter Alert Here"
                            onChange={(e) => setAlert(e.target.value)}
                        />
                        <Button variant="danger" id="Set/Clear Alert" onClick={updateAlert}>
                                                                 Set/Clear Alert
                                                              </Button>
                    </InputGroup>


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
                                <Tab.Pane eventKey="second" >
                                    <Form.Group controlId="formFileSm" className=" flex-sm-wrap">
                                        {/*<Form.Control onChange={onChange}*/}
                                        {/*              type="file"*/}
                                        {/*              size="sm"*/}
                                        {/*              multiple*/}
                                        {/*/>*/}
                                        <Button variant="success" id="Submit Comment" onClick={handleShow}>
                                            Upload A Photo
                                        </Button>
                                    </Form.Group>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Upload File</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form.Control onChange={onChange}
                                                          type="file"
                                                          size="sm"
                                            />
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="success" onClick={onUpload}>
                                                Upload
                                            </Button>
                                        </Modal.Footer>
                                    </Modal><br/>
                                    {renderImage()}
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
                                    <InputGroup className="mb-3 flex-sm-wrap">
                                        <FormControl
                                            placeholder="Enter Drug Name Here"
                                            onChange={(e) => setDrugName(e.target.value)}
                                        /><br/>
                                        <FormControl
                                            placeholder="Enter Instructions Here"
                                            onChange={(e) => setInstructions(e.target.value)}
                                        />
                                        </InputGroup>
                                        <InputGroup className="mb-4 flex-sm-wrap">
                                        <FormControl
                                            placeholder="Enter Dosage Here"
                                            onChange={(e) => setDosage(e.target.value)}
                                        />
                                        <FormControl
                                            placeholder="Enter Delivery Method Here"
                                            onChange={(e) => setDeliveryMethod(e.target.value)}
                                        />
                                        </InputGroup>
                                        <InputGroup className="mb-5 flex-sm-wrap">
                                        <Button variant="success" id="Submit Prescription" onClick={addPrescription}>
                                            Submit
                                        </Button>
                                        <Modal show={show2} onHide={handleClose2}>
                                                                   <Modal.Body>
                                                                       <Form.Label> One Or More Invalid Entries</Form.Label>
                                                                   </Modal.Body>
                                                                   <Modal.Footer>
                                                                       <Button variant="secondary" onClick={handleClose2}>
                                                                           Close
                                                                       </Button>
                                                                   </Modal.Footer>
                                                               </Modal>
                                    </InputGroup>
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
                                    <InputGroup className="mb-3 flex-sm-wrap">
                                        <FormControl
                                            placeholder="Enter Description Here"
                                            onChange={(e) => setStatusDescription(e.target.value)}
                                        /><br/>
                                        <FormControl
                                            placeholder="Enter Location Here"
                                            onChange={(e) => setLocation(e.target.value)}
                                        />
                                        </InputGroup>
                                        <InputGroup className="mb-4 flex-sm-wrap">
                                        <FormControl
                                            placeholder="Enter New Status Here"
                                            onChange={(e) => setStatus(e.target.value)}
                                        />
                                        <FormControl
                                            placeholder="Associated Image Id"
                                            onChange={(e) => setStatusImageId(e.target.value)}
                                        />
                                        </InputGroup>
                                        <InputGroup className="mb-5 flex-sm-wrap">
                                        <Button variant="success" id="Submit Status Update" onClick={addStatus}>
                                            Submit
                                        </Button>
                                        </InputGroup>
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
