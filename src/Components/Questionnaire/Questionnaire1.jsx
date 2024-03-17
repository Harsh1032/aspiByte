import React, { useContext, useState, useEffect } from 'react';
import ThemeContext from '../../ThemeContext';

const Questionnaire1 = () => {
  const {selectedTheme} = useContext(ThemeContext);
  const [mcqData, setMCQData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [finalSelectedValues, setFinalSelectedValues] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/mcq')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMCQData(data);
        setSelectedOptions(new Array(data.length).fill(null));
        setFinalSelectedValues(new Array(data.length).fill(null));
      })
      .catch(error => {
        console.error('Error fetching MCQ data:', error);
      });
  }, []);

  const handleOptionSelect = (event) => {
    const selectedIndex = parseInt(event.target.value);
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = selectedIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextButtonClick = () => {
    const newFinalSelectedValues = [...finalSelectedValues];
    newFinalSelectedValues[currentQuestionIndex] = selectedOptions[currentQuestionIndex];
    setFinalSelectedValues(newFinalSelectedValues);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  console.log(selectedOptions);

  return (
    <div className='w-full h-screen pt-[110px]' style = {{background: selectedTheme.colors.tertiary}}>
    {mcqData?.length > 0 && currentQuestionIndex < mcqData?.length && (
      <div className='h-[400px] w-[600px] flex flex-col m-auto rounded-lg py-2 pl-9' style={{background: selectedTheme.colors.primary}}>
        <h1 className='font-bold text-2xl'>Answer the questions and start your journey! </h1>
        <hr className="border border-[#000000]/[0.5] w-[508px] mt-2"></hr>
        <h2 className='text-xl font-semibold mt-5'>{mcqData[currentQuestionIndex]?.question}</h2>
        <form className='flex flex-col mt-5'>
          {mcqData[currentQuestionIndex]?.options?.map((option, index) => (
            <div key={index} className="mb-2">
              <input
                type="radio"
                id={`option-${index}`}
                name={`question-${currentQuestionIndex}`}
                value={index}
                checked={selectedOptions[currentQuestionIndex] === index}
                onChange={handleOptionSelect}
                className="mr-2"
              />
              <label className= 'text-xl' htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
        </form>
        <button 
          className='h-[50px] w-[150px] rounded-xl ml-[180px] text-xl font-semibold p-2 hover:shadow-2xl hover:animate-bounce mt-5' style = {{background: selectedTheme.colors.seventh, color: selectedTheme.colors.ninth}}
          onClick={handleNextButtonClick}
        >
          Next
        </button>
      </div>
    )}
    {currentQuestionIndex === mcqData?.length && (
      <div>
        <h1 className="text-2xl font-semibold mb-4">End of questions</h1>
        {/* You can add any additional content or functionality here */}
      </div>
    )}
  </div>

  )
}

export default Questionnaire1