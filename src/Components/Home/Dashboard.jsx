import React, {useContext} from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import ThemeContext from '../../ThemeContext';

const Dashboard = () => {
    
  const {selectedTheme} = useContext(ThemeContext);
  return (
    <div className='w-full h-full flex items-center px-10 ' style = {{color: selectedTheme.colors.secondary}}>
        <Link to='/home'><h1 className='text-4xl font-bold '>aspieByte</h1></Link>
        <div className='w-[300px] h-full flex items-center justify-between ml-auto'>
            <div className=' w-[200px] flex justify-between text-xl font-medium'>
                <Link to = '/coursesDetail'><p>Courses</p></Link>
                <Link to='/settings'><p>Settings</p></Link>
            </div>
            <div className='mr-5'>    
                <CiSearch size={22} color = 'white'/>    
            </div>
        </div>
    </div>
  )
}

export default Dashboard