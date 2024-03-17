import React, {useState, useContext} from 'react';
import { CiSearch } from "react-icons/ci";
import Footer from './Home/Footer';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import { IoMdColorPalette } from "react-icons/io";
import { FaUnlockAlt } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import ThemeContext from '../ThemeContext';
import { themes } from '../themes';
import FontSizeSlider from '../FontSizeSlider';

const Settings = ({ fontSize, setFontSize }) => {

  const {selectedTheme, changeTheme} = useContext(ThemeContext);

  const [light, setLight] = useState(themes[0]);
  const [dark, setDark] = useState(themes[1]);
  const [halloween, setHalloween] = useState(themes[2]);
  const [summer, setSummer] = useState(themes[3]);

  const handleThemeChange = (theme) => {
    changeTheme(theme);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value));
  };

  return (
        <div className='h-screen w-full overflow-y-scroll no-scrollbar' style={{ fontSize: `${fontSize}px` }}>
            <div className='w-full h-[64px]' style = {{background: selectedTheme.colors.fifth}}>
                <div className='w-full h-full flex items-center px-10 ' style = {{color: selectedTheme.colors.secondary}}>
                    <Link to ='/home'><h1 className='text-4xl font-bold '>aspieByte</h1></Link>
                    <div className='w-[300px] h-full flex items-center justify-between ml-auto'>
                        <div className=' w-[200px] flex justify-between text-xl font-medium'>
                            <Link to ="/coursesDetail"><p>Courses</p></Link>
                            <p>Settings</p>
                        </div>
                    <div className='mr-5'>    
                        <CiSearch size={22} color = 'white'/>    
                    </div>
                </div>
            </div>
          </div>
          <div className='flex w-full'>
            <div className='w-[20%] flex flex-col pl-5 h-[510px] overflow-y-hidden py-5' style = {{background: selectedTheme.colors.primary}}>
              <div className='w-[90%] flex hover:bg-[#E5E1DA] hover:rounded-md py-2 pl-3'>
                <FaUser size={25} style={{marginTop: 3}}/>
                <p className='text-2xl ml-3'>Account</p>
              </div>
              <div className='w-[90%] flex hover:bg-[#E5E1DA] hover:rounded-md p-2 '>
                <IoMdColorPalette size={30} style={{marginTop: 3}}/>
                <p className='text-2xl ml-3'>Appearance</p>
              </div>
              <div className='w-[90%] flex  hover:bg-[#E5E1DA] hover:rounded-md py-2 pl-3'>
                <FaUnlockAlt size={25} style={{marginTop: 3}}/>
                <p className='text-2xl ml-3'>Security</p>
              </div>
              <div className='w-[90%] flex  hover:bg-[#E5E1DA] hover:rounded-md p-2'>
                <MdNotificationsActive size={30} style={{marginTop: 3}}/>
                <p className='text-2xl ml-3'>Notifications</p>
              </div>
            </div>
            <div className='w-[80%] h-[510px] bg-[#ffffff] px-10'>
                <div className='ml-auto flex w-[200px] mt-2'>
                    <Link to = "/game2"><p className='font-normal text-base text-[#505050]'>feeling stressed?</p></Link>
                </div>   
                <div className=''>
                   <h1 className='font-medium text-2xl'>Set Your Theme</h1>
                </div>
                <div className='grid grid-cols-4 gap-2 w-full mt-4'>
                  <div className='flex flex-col justify-center w-[140px] h-[140px]'>
                    <div className='grid grid-cols-2 w-[120px] h-[120px] pl-4'>
                      <div className='w-[60px] h-[60px]' style = {{background: light.colors.tertiary}}></div>
                      <div className='w-[60px] h-[60px]' style = {{background: light.colors.primary}}></div>
                      <div className='w-[60px] h-[60px]' style = {{background: light.colors.fifth}}></div>
                      <div className='w-[60px] h-[60px]' style = {{background: light.colors.quartary}}></div>   
                    </div>
                    <input
                      type="radio"
                      className="mt-2"
                      name="theme"
                      value= {selectedTheme.name}
                      checked= {selectedTheme === themes[0]}
                      onChange={() => handleThemeChange(themes.find(theme => theme.name === 'light'))} 
                    />
                  </div>
                  <div className='flex flex-col justify-center w-[140px] h-[140px]'>
                    <div className='grid grid-cols-2 w-[120px] h-[120px] pl-4'>
                      <div className='w-[60px] h-[60px]' style = {{background: dark.colors.seventh}}></div>
                      <div className='w-[60px] h-[60px]' style = {{background: dark.colors.primary}}></div>
                      <div className='w-[60px] h-[60px]' style = {{background: dark.colors.eight}}></div>
                      <div className='w-[60px] h-[60px]' style = {{background: dark.colors.fifth}}></div>   
                    </div>
                    <input
                      type="radio"
                      className="mt-2"
                      name="theme"
                      value= {selectedTheme.name}
                      checked= {selectedTheme === themes[1]}
                      onChange={() => handleThemeChange(themes.find(theme => theme.name === 'dark'))} 
                    />
                  </div>
                  <div className='flex flex-col justify-center w-[140px] h-[140px]'>
                    <div className='grid grid-cols-2 w-[120px] h-[120px] pl-4'>
                      <div className='w-[60px] h-[60px]' style = {{background: halloween.colors.quartary}}></div>
                      <div className='w-[60px] h-[60px]' style = {{background: halloween.colors.primary}}></div>
                      <div className='w-[60px] h-[60px]' style = {{background: halloween.colors.tertiary}}></div>
                      <div className='w-[60px] h-[60px]' style = {{background: halloween.colors.quartary}}></div>   
                    </div>
                    <input
                      type="radio"
                      className="mt-2"
                      name="theme"
                      value= {selectedTheme.name}
                      checked= {selectedTheme === themes[2]}
                      onChange={() => handleThemeChange(themes.find(theme => theme.name === 'halloween'))} 
                    />
                  </div>
                  <div className='flex flex-col justify-center w-[140px] h-[140px]'>
                    <div className='grid grid-cols-2 w-[120px] h-[120px] pl-4'>
                      <div className='w-[60px] h-[60px]' style = {{background: summer.colors.tertiary}}></div>
                      <div className='w-[60px] h-[60px]' style = {{background: summer.colors.primary}}></div>
                      <div className='w-[60px] h-[60px]' style = {{background: summer.colors.quartary}}></div>
                      <div className='w-[60px] h-[60px]' style = {{background: summer.colors.eight}}></div>   
                    </div>
                    <input
                      type="radio"
                      className="mt-2"
                      name="theme"
                      value= {selectedTheme.name}
                      checked= {selectedTheme === themes[3]}
                      onChange={() => handleThemeChange(themes.find(theme => theme.name === 'summer'))} 
                    />
                  </div>
                </div>
                <FontSizeSlider value={fontSize}  onChange={handleFontSizeChange}/>
            </div>
          </div>
          <div className='w-full h-[64px] ' style = {{background: selectedTheme.colors.fifth}}><Footer/></div>
        </div>
      )
    }

export default Settings