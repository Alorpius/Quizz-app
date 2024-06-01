

import { initialResult } from '../constance'
import AnswerTimer from './AnswerTimer'
import {useState} from 'react'
import './main.css'
import InfoResult from './InfoResult'

const Main = ({questions}) => {

const [currentQuestion, setCurrentQuestion]=useState(0);
const [answerIdx, setAnswerIdx]=useState(null)
const [answer, setAnswer]=useState(null)
const [result, setResult]=useState(initialResult)
const [showResult, setShowResult] =useState(false)
const [showTimer, setShowTimer] =useState(true)
const [answerUI, setAnswerUI] =useState()

  const {question,choices, correctAnswer,type}=questions[currentQuestion]


  const onAnswerlist =(answer, index)=>{
      setAnswerIdx(index);  
      if(answer===correctAnswer){
        setAnswer(true)
      }else{
        setAnswer(false)
      }
  }

  const onNext = (finalAnswer) => {
    setAnswerUI("")
     setShowTimer(false)
    setAnswerIdx(null)
    setResult((prev) =>
    finalAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, 
          wrongAnswers: prev.wrongAnswers + 1 }
    );

   if(currentQuestion !==questions.length - 1){
    setCurrentQuestion((prev)=> prev + 1)
   }else
   {
    setCurrentQuestion(0)
    setShowResult(true)
   }
   setTimeout(()=>{

    setShowTimer(true)
  })

  }

  

  const HandleTimeUp=()=>{
  
   onNext(false)
   setAnswer(false)
   
   
  }

  const onTryAgain=()=>{
    setResult(initialResult)
    setShowResult(false)
  
  }
const handleInput=(evn)=>{
 setAnswerUI(evn.target.value)
 if (evn.target.value===correctAnswer){
  setAnswer(true)
 }else{
  setAnswer(false)
 }
}

  const showQuestionUI=(evt)=>{
   
if (type === "FIB")
return(
  <input value={answerUI} onChange={handleInput}/>
)
return(
  <ul>
  {
   choices.map((answer, index)=>(
    <li 
    onClick={()=>onAnswerlist(answer, index)}
    key={answer}
    className={answerIdx===index ? "selected-answer" : null}
   >
    {answer}
    </li>
  ))}
</ul>
)
  }

  return (
    <div className='quizz-container'>
     
      {!showResult ? (
      <div>
       { showTimer && <AnswerTimer duration={5} onTimeup={HandleTimeUp}/>}
        <span className='question-no'>{currentQuestion + 1}</span>
        <span className='total-questions'>/{questions.length}</span>
        <h3>{question}</h3>
          {showQuestionUI()}
        <div className='footer'>
        <button onClick={()=>onNext(answer)} disabled={answerIdx===null && !answerUI}>
          { currentQuestion===questions.length -1 ? "finished" : "Next" }
        </button>
        </div>
      </div>
) :  
   (
     <InfoResult result={result} onTryAgain={onTryAgain} totalQuestions={questions.length}/>   
       )}
       
    </div>
  )
}

export default Main