 import React,{useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Col, Row, Badge, Form, InputGroup,Modal, Dropdown, DropdownButton, ListGroup, Table, Navbar, Container, Image,Offcanvas,Nav,NavDropdown,FormControl} from "react-bootstrap";
import axios from "axios";
import './AttendantNavigation.css';
 import images from "./Images/vetmed.png";


export default function AttendantNavigation() {
    let [animals,setAnimals] = useState([]);
    const [animalName, setAnimalName] = useState("");
    const [animalSpecies, setAnimalSpecies] = useState("");
    const [animalStatus, setAnimalStatus] = useState("");
    const [animalId, setAnimalId] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useNavigate();

   async function selectAnimal(event) {
           event.preventDefault();
           window.localStorage.setItem("animal", animalId)
           axios.post('http://localhost:8080/searchForAnimal',
           null,
           {
               params: {
                   animalId
               }
           })
           .then(function(response){
               if(response.data.animalId > 0){
                   history('/AttendantAnimalProfile');
               }
               else{
                   handleShow();
               }
           })
           .catch(function(error){
               console.log(error);
           })
       }



  useEffect(() => {
        axios.get('http://localhost:8080/animals',
            null,
            )
            .then(function(response){
                const animalList = response.data
                setAnimals(animalList)

                var table = document.getElementById("table");
                if(table.rows.length <= 1){
                    const animalList = response.data
                    window.localStorage.setItem("animalCount", animalList.length)
                    var j = 1;
                    for(var i = 0; i < animalList.length; i++){
                        var temp = animalList[i]
                        var row = table.insertRow(i+1)
                        for(var k = 0; k < 10; k++){
                            row.insertCell(k)
                        }
                        table.rows[j].cells[0].innerHTML = temp.animalId
                        table.rows[j].cells[1].innerHTML = temp.animalName
                        table.rows[j].cells[2].innerHTML = temp.species
                        table.rows[j].cells[3].innerHTML = temp.breed
                        table.rows[j].cells[4].innerHTML = temp.sex
                        table.rows[j].cells[5].innerHTML = temp.statusType
                        table.rows[j].cells[6].innerHTML = temp.available
                        table.rows[j].cells[7].innerHTML = temp.location
                        table.rows[j].cells[8].innerHTML = temp.alert
                        table.rows[j].cells[9].innerHTML = temp.color
                        j = j + 1
                    }
                }
            })
            .catch(function(error){
                console.log(error);
            }
        );
    },[])



     async function searchAnimals(event) {
          event.preventDefault();

          console.log(animalName)
          console.log(animalSpecies)
          console.log(animalStatus)

          await axios.get('http://localhost:8080/filteredAnimals',
              {
                  params: {
                      animalName,
                      animalSpecies,
                      animalStatus
                  }
              })
              .then(function(response){
                  const filteredAnimalList = response.data
                   console.log(filteredAnimalList)
                  var table = document.getElementById("table");
                  var rowCount = table.rows.length
                  var j = 1;
                  for(var i = 1; i < rowCount; i++){
                      table.deleteRow(j)
                  }
                  for(var i = 0; i < filteredAnimalList.length; i++){
                      var temp = filteredAnimalList[i]
                      var row = table.insertRow(i+1)
                      for(var k = 0; k < 10; k++){
                          row.insertCell(k)
                      }
                      table.rows[j].cells[0].innerHTML = temp.animalId
                      table.rows[j].cells[1].innerHTML = temp.animalName
                      table.rows[j].cells[2].innerHTML = temp.species
                      table.rows[j].cells[3].innerHTML = temp.breed
                      table.rows[j].cells[4].innerHTML = temp.sex
                      table.rows[j].cells[5].innerHTML = temp.statusType
                      table.rows[j].cells[6].innerHTML = temp.available
                      table.rows[j].cells[7].innerHTML = temp.location
                      table.rows[j].cells[8].innerHTML = temp.alert
                      table.rows[j].cells[9].innerHTML = temp.color
                      j = j + 1
                  }
              })
              .catch(function(error){
                  console.log(error);
              }
          );
      }


    var id =window.localStorage.getItem('userId')
    console.log(id)
    return (
        <div>
            <Navbar variant="light" expand={false} bg="white">
                <Container fluid>
                    <Navbar.Brand href = "#home" >
                        <Image className="d-inline-block align-top" src={images} fluid/>
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
            </Navbar>
            <br/>
            <Container fluid>

             <div>
                 <Container fluid>
                     <Row className="flex-lg-wrap">
                         <Col lg="3">

                             <InputGroup className="me-2" >

                                 <Form.Control
                                     autoFocus
                                     placeholder="Animal Name"
                                      value = {animalName}
                                       onChange =  {(e) => setAnimalName(e.target.value)}

                                 />

                             </InputGroup><br/>
                         </Col>

                         <Col lg="3">

                             <InputGroup className="me-2"  >

                                 <Form.Control
                                     autoFocus
                                     placeholder="Species"
                                      value = {animalSpecies}
                                      onChange =  {(e) => setAnimalSpecies(e.target.value)}
                                 />

                             </InputGroup><br/>
                             </Col>
                         <Col lg="3">

                             <InputGroup className="me-2"  >

                                 <Form.Control
                                     autoFocus
                                     placeholder="Status"
                                      value = {animalStatus}
                                      onChange =  {(e) => setAnimalStatus(e.target.value)}
                                 />

                             </InputGroup><br/>

                         </Col>
                     </Row><br/>

                     <Button onClick= {searchAnimals} >Search By Filter</Button>

                         <Row xs ={"auto"}>
                     </Row><br/>
                 </Container>
             </div>

                 <h1>
                     Results
                 </h1>
                 <Table responsive striped bordered hover id="table">
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
                     </tr>
                     </thead>
                   </Table>
                         <Row className="flex-lg-wrap">
                             <Col lg="2">

                                 <InputGroup className="me-2"  >

                                     <Form.Control
                                         autoFocus
                                         placeholder="Enter Animal ID"
                                         value = {animalId}
                                          onChange =  {(e) => setAnimalId(e.target.value)}
                                     />

                                 </InputGroup><br/>

                             </Col>
                              <Col lg="3">
                         <Button onClick= {selectAnimal} >Select Animal</Button>
                             </Col>

                         </Row><br/>
                         <Modal show={show} onHide={handleClose}>
                             <Modal.Body>
                                 <Form.Label>Animal Not Found</Form.Label>
                             </Modal.Body>
                             <Modal.Footer>
                                 <Button variant="secondary" onClick={handleClose}>
                                     Close
                                 </Button>
                             </Modal.Footer>
                         </Modal>
             </Container>

         </div>
     );
  }