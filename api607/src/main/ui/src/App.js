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


function App() {
  return (
      <div>
          <BrowserRouter>
              {/*<h1>Vet Med</h1>*/}
              <div className="header">
              </div>
              <div className= "content">
                  <NavLink  exact activeClassName="active" to="/">Login</NavLink>
                  <NavLink  exact activeClassName="active" to="/teacherdashboard">Teacher</NavLink>
                  <NavLink  exact activeClassName="active" to="/Admindashboard">Admin</NavLink>
                  <NavLink  exact activeClassName="active" to="/techniciandashboard">Technician</NavLink>
                  <NavLink  exact activeClassName="active" to="/navadashboard">Nav Page Admin</NavLink>
                  <NavLink  exact activeClassName="active" to="/navnadashboard">Nav Page Non Admin</NavLink>
                  <NavLink  exact activeClassName="active" to="/personalsettings">Personal Setting</NavLink>
                  <NavLink  exact activeClassName="active" to="/userhandling">User Handling</NavLink>
                  <NavLink  exact activeClassName="active" to="/animalprofilestudent">Animal Profile Student</NavLink>

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
                  </Routes>

              </div>
          </BrowserRouter>


      </div>
  );
}

export default App;