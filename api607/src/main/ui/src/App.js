import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Login';
import AdminAnimalManagement from './AdminAnimalManagement';
import AdminAnimalProfile from './AdminAnimalProfile';
import AdminNavigation from './AdminNavigation';
import AdminTeachingRequestManagement from './AdminTeachingRequestManagement';
import AttendantAnimalProfile from './AttendantAnimalProfile';
import AttendantNavigation from './AttendantNavigation';
import AttendantTreatmentRequest from './AttendantTreatmentRequest';
import PersonalSettings from './PersonalSettings';
import StudentAnimalProfile from './StudentAnimalProfile';
import StudentNavigation from './StudentNavigation';
import TeacherAnimalProfile from './TeacherAnimalProfile';
import TeacherTeachingRequest from './TeacherTeachingRequest';
import TechnicianAnimalProfile from './TechnicianAnimalProfile';
import TechnicianTeachingRequestManagement from './TechnicianTeachingRequestManagement';
import TechnicianTreatmentRequestManagement from './TechnicianTreatmentRequestManagement';
import UserManagement from './UserManagement';

function App() {
  return (
      <div>
          <BrowserRouter>
              {/*<h1>Vet Med</h1>*/}
              <div className="header">
              </div>
              <div className= "content">
                  <Routes>
                      <Route  exact path ='/' element={<Login/>}/>
                      <Route path ='/AdminAnimalManagement' element={<AdminAnimalManagement/>}/>
                      <Route path ='/AdminAnimalProfile' element={<AdminAnimalProfile/>}/>
                      <Route path ='/AdminNavigation' element={<AdminNavigation/>}/>
                      <Route path ='/AdminTeachingRequestManagement' element={<AdminTeachingRequestManagement/>}/>
                      <Route path ='/AttendantAnimalProfile' element={<AttendantAnimalProfile/>}/>
                      <Route path ='/AttendantNavigation' element={<AttendantNavigation/>}/>
                      <Route path ='/AttendantTreatmentRequest' element={<AttendantTreatmentRequest/>}/>
                      <Route path ='/PersonalSettings' element={<PersonalSettings/>}/>
                      <Route path ='/StudentAnimalProfile' element={<StudentAnimalProfile/>}/>
                      <Route path ='/StudentNavigation' element={<StudentNavigation/>}/>
                      <Route path ='/TeacherAnimalProfile' element={<TeacherAnimalProfile/>}/>
                      <Route path ='/TeacherTeachingRequest' element={<TeacherTeachingRequest/>}/>
                      <Route path ='/TechnicianAnimalProfile' element={<TechnicianAnimalProfile/>}/>
                      <Route path ='/TechnicianTeachingRequestManagement' element={<TechnicianTeachingRequestManagement/>}/>
                      <Route path ='/TechnicianTreatmentRequestManagement' element={<TechnicianTreatmentRequestManagement/>}/>
                      <Route path ='/UserManagement' element={<UserManagement/>}/>
                  </Routes>
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;