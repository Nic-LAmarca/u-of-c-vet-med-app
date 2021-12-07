import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import TeacherDashboard from './TeacherDashboard';
import AdminDashboard from './AdminDashboard';
import TechnicianDashboard from './TechnicianDashboard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationPageAdmin from "./NavigationPageAdmin";
import NavigationPageNonAdmin from "./NavigationPageNonAdmin";
import PersonalSettingsDashboard from "./PersonalSettingsPage";
import UserHandlingDashboard from "./UserHandling";
import AnimalProfileStudentDashboard from "./AnimalProfileStudent";
import AnimalProfileAttendantDashboard from "./AnimalProfileAttendant";
import AnimalProfileTeacherDashboard from "./AnimalProfileTeacher";
import AnimalProfileTechnicianDashboard from "./AnimalProfileTechnician";

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
                      <Route path ='/teacherdashboard' element={<TeacherDashboard/>}/>
                      <Route path ='/Admindashboard' element={<AdminDashboard/>}/>
                      <Route path ='/techniciandashboard' element={<TechnicianDashboard/>}/>
                      <Route path ='/navadashboard' element={<NavigationPageAdmin/>}/>
                      <Route path ='/navnadashboard' element={<NavigationPageNonAdmin/>}/>
                      <Route path ='/personalsettings' element={<PersonalSettingsDashboard/>}/>
                      <Route path ='/userhandling' element={<UserHandlingDashboard/>}/>
                      <Route path ='/animalprofilestudent' element={<AnimalProfileStudentDashboard/>}/>
                      <Route path ='/animalprofileattendant' element={<AnimalProfileStudentDashboard/>}/>
                      <Route path ='/animalprofileteacher' element={<AnimalProfileStudentDashboard/>}/>
                      <Route path ='/animalprofiletechnician' element={<AnimalProfileStudentDashboard/>}/>
                  </Routes>
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;