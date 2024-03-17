import React, {useState} from 'react';
import SignUp from './Components/Registration/SignUp';
import Home from './Components/Home/Home';
import Login from './Components/Registration/Login';
import Landingpage from './Components/Registration/Landingpage';
import ParentalLogin from './Components/Registration/ParentalLogin';
import GuardianSignUp from './Components/Registration/GuardianSignUp';
import CoursesDetail from './Components/CoursesDetail';
import Settings from './Components/Settings';
import { Route, Routes, Navigate } from 'react-router-dom';
import Subject from './Components/Course/Subject';
import SubjectDetails from './Components/Course/SubjectDetails';
import Module1 from './Components/Course/Module1';
import Questionnaire1 from './Components/Questionnaire/Questionnaire1';
import Game1 from './Components/Games/Game1';
import Game2 from './Components/Games/Game2';

const App = () => {  
  // const [darkTheme, setDarkTheme] = useState (false); 
 
  const [fontSize, setFontSize] = useState(16);

  return (
    <div style={{ fontSize: `${fontSize}px` }}>
    <Routes>
      <Route path = '/signUp' element={<SignUp/>}></Route>
      <Route path = '/login' element={<Login/>}></Route>
      <Route path = '/' element={<Landingpage/>}></Route>
      <Route path = '/parentalLogin' element = {<ParentalLogin/>}></Route>
      <Route path = '/guardianSignUp' element = {<GuardianSignUp/>}></Route>
      <Route path = '/home' element = {<Home />}></Route>
      <Route path = '/coursesDetail' element = {<CoursesDetail/>}></Route>
      <Route path = '/settings' element = {<Settings fontSize={fontSize} setFontSize={setFontSize}/>}></Route>
      <Route path = '/subject' element = {<Subject/>}></Route>
      <Route path = '/subjectDetails' element = {<SubjectDetails/>}></Route>
      <Route path = '/module' element = {<Module1/>}></Route>
      <Route path = '/questionnaire1' element = {<Questionnaire1/>}></Route>
      <Route path = '/game1' element = {<Game1/>}></Route>
      <Route path = '/game2' element = {<Game2/>}></Route>
    </Routes>
    </div>
  )
}

export default App;