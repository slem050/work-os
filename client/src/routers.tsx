import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";



import Dashboard from '../src/pages/Dashbaord/Dashboard'
import MainPage from './pages/Dashbaord/panels/MainPage';
import Tasks from './pages/Dashbaord/panels/View';


import { Landing } from './pages/Landing';
import { Signin } from './pages/signin';
import { Signup } from './pages/signup';
import Projects from './pages/Dashbaord/panels/Projects'
import CreateProject from './pages/Dashbaord/panels/CreateProject';
import Createtask from './pages/Dashbaord/panels/createTask';


function Routers()
{
 
    return (
      <BrowserRouter>
          <Routes>
          <Route path="/main" element={<Landing />} />
            <Route path="/main/signUp" element={<Signup/>}/>
            <Route path="/main/signIn" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard  />} />
            <Route path="/dashboard/Projects" element={<Projects langfunc={undefined}  />} />
            <Route path="/createProject" element={<CreateProject langfunc={undefined}  />} />
            <Route path="/createTask" element={<Createtask langfunc={undefined}  />} />
            
            </Routes>

            <Routes>
            
           
          </Routes>
        </BrowserRouter>
      );
}
export default Routers;