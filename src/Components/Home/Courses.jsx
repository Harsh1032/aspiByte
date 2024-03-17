import React, {useContext} from 'react';
import AI from '../assets/AI.png'; 
import SQL from '../assets/SQL.png'; 
import ThemeContext from '../../ThemeContext';
import { Link } from 'react-router-dom';

const Courses = () => {
    const {selectedTheme} = useContext(ThemeContext);
  return (
    <>
        <h1 className='font-semibold text-6xl ml-20 pl-10' style = {{color: selectedTheme.colors.secondary}}>My Courses</h1>
        <div className='flex flex-col justify-center items-center py-5 overflow-y-hidden'>
            <Link to ='/subject'><div className='w-[600px] h-[200px] flex py-3 '>
                <div className='w-[60%] h-full rounded-l-md px-2 py-1' style = {{background: selectedTheme.colors.quartary}}>
                    <h1 className='font-semibold text-xl w-[250px] text-[#1F1F1F] pl-2'>aspieByte</h1>
                    <hr className="border border-[#000000] w-[250px] my-1"></hr>
                    <p className='font-bold text-xl my-2 w-[250px] pl-2 text-[#2F2F2F]'>Artificial Intelligence in Health Care</p>
                    <h4 className='font-medium text-lg text-[#464646] w-[250px] pl-2'>progress:</h4>
                </div>
                <img className='w-[40%] h-full rounded-r-md' src={AI}/>
            </div></Link>
            <div className='w-[600px] h-[200px] flex py-3 mt-2 '>
                <div className='w-[60%] h-full  rounded-l-md px-2 py-1' style = {{background: selectedTheme.colors.quartary}}>
                    <h1 className='font-semibold text-xl w-[250px] text-[#1F1F1F] pl-2'>aspieByte</h1>
                    <hr className="border border-[#000000] w-[250px] my-1"></hr>
                    <p className='font-bold text-xl my-2 w-[250px] pl-2 text-[#2F2F2F]'>Introduction to SQL</p>
                    <h4 className='font-medium text-lg text-[#464646] w-[250px] pl-2'>progress:</h4>
                </div>
                <img className='w-[40%] h-full rounded-r-md' src={SQL}/>
            </div>
    </div>
    </>
  )
}

export default Courses