import React, { useContext } from 'react';
import Dashboard from '../Home/Dashboard';
import ThemeContext from '../../ThemeContext';
import AI from '../assets/AI.png'; 
import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';

const Subject = () => {
    const {selectedTheme} = useContext(ThemeContext);
  return (
    <div>
        <div className= 'w-full h-[64px]' style = {{background: selectedTheme.colors.fifth}}>
            <Dashboard/>
        </div>
        <div className='w-full h-[350px] flex'>
            <img className='w-[630px] h-[350px] pl-5 pt-4 rounded-lg' src ={AI} />
            <div className='w-[640px] h-full flex flex-col'>
                <div className='float-right flex  ml-auto pt-4'>
                    <p className='font-normal text-base ' style = {{color: selectedTheme.colors.secondary}}>feeling stressed?</p>
                </div>
                <div className='flex flex-col pl-3 pt-7 w-[400px]'>
                    <p className='font-bold text-4xl mb-5'> Artificial Intelligence in Health Care</p>
                    <Link to='/subjectDetails'><button className='bg-[#DE4C4C] w-[150px] h-[40px] font-semibold text-xl' style = {{color: selectedTheme.colors.tertiary}}>Enroll</button></Link>
                </div>
            </div>
        </div>
        <p className='font-medium text-lg text-[#464646] mt-1 pl-5'>duration: 12 Hours 30 minutes</p>
        <div className='w-[1200px] pl-5 font-semibold text-2xl mt-2'>
            <p>Discover how machine learning and artificial intelligence can be deployed in health care to overcome challenges and optimize processes.</p>
        </div>
        <div className='flex w-full justify-center h-[720px] overflow-y-hidden mt-5 mb-10'>
            <div className='w-[48%] p-3 rounded-lg mr-4' style={{background: selectedTheme.colors.fifth, color: selectedTheme.colors.secondary}}>
                <h3 className='font-semibold text-lg'>About the course</h3>
                <p className='mt-2 text-2xl'>              
                    Improving prediction is one of the key challenges the medical 
                    industry faces in advancing patient care. Enhancing diagnosis, 
                    individualizing treatments, and understanding disease progression are 
                    all matters of prediction, an area where machine learning (ML) and 
                    artificial intelligence (AI) excel.1

                    Discover the impact AI innovations can have in medicine — on both 
                    traditional health care systems and decision-making approaches — with 
                    the Artificial Intelligence in Health Care online short course from the 
                    MIT Sloan School of Management and the MIT J-Clinic.

                    Through industry case studies, you’ll better understand AI’s 
                    applications and limitations, examine the challenges AI can help 
                    overcome, and explore how it’s already been successfully deployed in the
                    sector.

                    You’ll gain insight and knowledge from MIT, an institution renowned 
                    for developing ML methods with applications in health care. Regina 
                    Barzilay, your Faculty Director, is also globally recognized for her 
                    work in AI and breast cancer detection.
                </p>
            </div>
            <div className='w-[48%] p-3 rounded-lg' style={{background: selectedTheme.colors.primary}}>
            <h3 className='font-semibold text-lg' >Curriculam</h3>
                <p className='mt-2 text-2xl'>              
                    Improving prediction is one of the key challenges the medical 
                    industry faces in advancing patient care. Enhancing diagnosis, 
                    individualizing treatments, and understanding disease progression are 
                    all matters of prediction, an area where machine learning (ML) and 
                    artificial intelligence (AI) excel.1

                    Discover the impact AI innovations can have in medicine — on both 
                    traditional health care systems and decision-making approaches — with 
                    the Artificial Intelligence in Health Care online short course from the 
                    MIT Sloan School of Management and the MIT J-Clinic.

                    Through industry case studies, you’ll better understand AI’s 
                    applications and limitations, examine the challenges AI can help 
                    overcome, and explore how it’s already been successfully deployed in the
                    sector.

                    You’ll gain insight and knowledge from MIT, an institution renowned 
                    for developing ML methods with applications in health care. Regina 
                    Barzilay, your Faculty Director, is also globally recognized for her 
                    work in AI and breast cancer detection.
                </p>
            </div>

        </div>
        <div className='w-full h-[64px] ' style = {{background: selectedTheme.colors.fifth}}><Footer/></div>
    </div>
  )
}

export default Subject