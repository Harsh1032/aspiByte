import React, {useContext} from 'react';
import Dashboard from '../Home/Dashboard';
import Schedule from '../Home/Schedule';
import UpcomingEvent from '../Home/UpcomingEvent';
import Footer from '../Home/Footer';
import ThemeContext from '../../ThemeContext';

const Module1 = () => {
  const {selectedTheme} = useContext(ThemeContext);

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
          <h1 className='font-normal text-5xl' style = {{color: selectedTheme.colors.secondary}}><span className='font-semibold mr-2'>Module 1.1:</span>Introduction to SQL</h1>
        </div>
        <div className='mt-5 w-full h-[330px] flex justify-center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/uTjnqFSLciE?si=G0BAFhyhw-I4DnjZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='flex w-full justify-center h-[60px] mt-3'>
          <button className='w-[200px] h-[40px] rounded-xl text-xl mr-4 font-normal' style= {{background: selectedTheme.colors.primary, color: selectedTheme.colors.ninth}}>{'<'} Previous</button>
          <button className='w-[340px] h-[40px] rounded-xl text-xl font-normal' style= {{background: selectedTheme.colors.eight, color: selectedTheme.colors.ninth}}>Next {'>'}</button>
        </div>
        <div className='flex justify-center w-full mt-5'>
          <div className='w-[560px] h-[200px] rounded-lg' style = {{background: selectedTheme.colors.fifth, color: selectedTheme.colors.secondary}}>
            
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

export default Module1