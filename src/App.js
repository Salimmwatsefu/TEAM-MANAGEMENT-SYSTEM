import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {Navbar, Footer, Sidebar} from "./components";
import { Ecommerce, Projects, Calendar, Employees, Clients, Jira, Line, Area,Pie, Financial, ColorMapping, Editor } from './pages';
import "./App.css";
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
    const { activeMenu} = useStateContext();
  return (
    <div>
        <BrowserRouter>


        {/*settings icon */}
        <div className='flex relative  dark:bg-main-dark-bg'>
            <div className='fixed right-4 bottom-4 style={zIndex: "10000"}'>
                <TooltipComponent content="Settings" position='Top'>
                    <button type='button' className='text-3xl p-3 text-white' style={{background: "orange", borderRadius: "30%"}}>
                        <FiSettings />
                    </button>

                </TooltipComponent>

            </div >



            {/*sidebar styling */}
            {activeMenu ? (
                <div className='w-72  dark:bg-secondary-dark-bg  bg-red-500'> <Sidebar />
                </div>
            ) : (
                <div className='w-0 dark:bg-secondary-dark-bg'><Sidebar/></div>
            )}
            <div className={
                activeMenu
                ? 'dark:bg-main-bg  bg-white min-h-screen md:ml-0 w-full'
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }>
                <div className='fixed md:static bg-red-500 dark:bg-main-dark-bg navbar w-full'>
                    <Navbar />
                </div>
            <div>
                <Routes>
                    {/* Dashboard */}
                   <Route path='/' element={<Ecommerce/>}/> 
                   <Route path='/ecommerce' element={<Ecommerce/>}/>

                   {/* Pages */}
                   <Route path='/projects' element={<Projects/>}/> 
                   <Route path='/employees' element={<Employees/>}/> 
                   <Route path='/clients' element={<Clients/>}/> 

                   {/* Apps */} 
                   <Route path='/jira' element={<Jira/>}/> 
                   <Route path='/editor' element={<Editor/>}/> 
                   <Route path='/calendar' element={<Calendar/>}/> 

                    {/*Charts  */}
                   <Route path='/area' element={<Area/>}/> 



                </Routes>
            </div>
            </div>
        </div>
        </BrowserRouter>
    </div>
  )
}


export default App