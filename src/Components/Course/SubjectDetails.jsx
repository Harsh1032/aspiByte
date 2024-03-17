import React, { useContext, useState } from 'react';
import Dashboard from '../Home/Dashboard';
import ThemeContext from '../../ThemeContext';
import Schedule from '../Home/Schedule';
import UpcomingEvent from '../Home/UpcomingEvent';
import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';

const SubjectDetails = () => {
    const {selectedTheme} = useContext(ThemeContext);

    const [showOptions, setShowOptions] = useState(false); // State variable to toggle visibility of select options

  return (
    <div>
        <div className= 'w-full h-[64px]' style = {{background: selectedTheme.colors.fifth}}>
            <Dashboard/>
        </div>
        <div className='flex w-full'>
        <div className='w-[70%] h-[905px] overflow-y-scroll no-scrollbar' style = {{background: selectedTheme.colors.sixth}}>
            <div className='ml-auto flex w-[200px] mt-2'>
                <p className='font-normal text-base' style = {{color: selectedTheme.colors.secondary}}>feeling stressed?</p>
            </div>
            <div className='py-2 ml-5 mb-7'>
                <h1 className='font-semibold text-4xl' style = {{color: selectedTheme.colors.secondary}}>Introduction to SQL</h1>
            </div>
            <div className='text-xl'>
              <button className={`w-[900px] h-[50px] mt-3 ${showOptions? 'rounded-t-lg' : 'rounded-lg'} mx-4 flex justify-between p-2 ${showOptions? 'border-x-2 border-t-2' : 'border-2'} `} style = {{background: selectedTheme.colors.seventh, color: selectedTheme.colors.ninth, borderColor: selectedTheme.colors.primary}} onClick={() => setShowOptions(!showOptions)}>
                <span>module 1 Introduction</span>
                {showOptions ? <span className='text-2xl'>-</span> : <span className='text-2xl'>+</span>} 
              </button>
              <div className={`w-[900px] h-[50px] p-3 mx-4 grid overflow-hidden transition-all duration-300 ease-in-out text-sm ${showOptions ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0" }  border-l-2 border-r-2 `}  style = {{background: selectedTheme.colors.seventh, color: selectedTheme.colors.ninth, borderColor: selectedTheme.colors.primary}}>
                <Link to = '/module'><div className="overflow-hidden text-xl">module 1.1 Introduction to SQL</div></Link>
              </div>
              <div className={`w-[900px] h-[50px] p-3  mx-4 grid overflow-hidden transition-all duration-300 ease-in-out text-sm ${showOptions ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0" } border-l-2 border-r-2 `}  style = {{background: selectedTheme.colors.seventh, color: selectedTheme.colors.ninth, borderColor: selectedTheme.colors.primary}}>   
              <div className="overflow-hidden text-xl">module 1.2 Assessment 1: Basic Understanding</div>
              </div>
              <div className={`w-[900px] h-[50px] p-3 mx-4 grid overflow-hidden transition-all duration-300 ease-in-out text-sm ${showOptions ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0" } border-l-2 border-r-2 `}  style = {{background: selectedTheme.colors.seventh, color: selectedTheme.colors.ninth, borderColor: selectedTheme.colors.primary}}>
                <div className="overflow-hidden text-xl">module 1.3 Foundation of databases in SQL</div>
              </div>
              <div className={`w-[900px] h-[50px] p-3 rounded-b-lg mx-4 grid overflow-hidden transition-all duration-300 ease-in-out text-sm ${showOptions ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0" } border-l-2 border-r-2 border-b-2 `}  style = {{background: selectedTheme.colors.seventh, color: selectedTheme.colors.ninth, borderColor: selectedTheme.colors.primary}}>
                <div className="overflow-hidden text-xl">module 1.4 Quiz 1</div>
              </div>     
            </div>
        </div>
        <div className='w-[30%] h-[905px] overflow-y-hidden'  style = {{background: selectedTheme.colors.primary}}>
          <Schedule/>
          <UpcomingEvent/>
        </div>
      </div>
      <div className='w-full h-[64px] ' style = {{background: selectedTheme.colors.fifth}}><Footer/></div>
    </div>
  )
}

export default SubjectDetails