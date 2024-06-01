import React from 'react'
import './InfoResult.css'
import { useState, useEffect } from 'react'


const InfoResult = ({onTryAgain, result, totalQuestions}) => {
  const [name, setName]=useState('')
  const [showResult, setShowResult]=useState(false)
  const [highScores, setHighScores]=useState([])

useEffect(()=>{
   setHighScores( JSON.parse(localStorage.getItem("highScores")) || [])
},[])

  const handleSave=()=>{
     const score=
     {
      name,
      score: result.score
     };
    
    const newResult=[...highScores,score].sort((a,b)=>b.score - a.score)
     setHighScores(newResult)
  localStorage.setItem("highScores", JSON.stringify(newResult))
  setShowResult(true)
  }

 const handleTryAgain=()=>{
   onTryAgain()
   setHighScores([])
   setShowResult(false)
 }

  return(

  <div className='result'> 
   
  <h3>Result</h3>
  <p>
  Total Questions: <span>{totalQuestions}</span>
</p>
<p>
Total Score: <span>{result.score}</span> 
</p>
<p>
correct Answers: <span>{result.correctAnswers }</span>
</p>
<p>
wrong Answers: <span>{result.wrongAnswers}</span>
</p>
<button onClick={handleTryAgain}>Try Again</button>
 
{!showResult ?
 <>
   <h3>Enter your name to <br/> to see your score</h3>
   <input 
   placeholder='Enter your Name'
   value={name} onChange={(evn)=>setName(evn.target.value)}/>
   <button onClick={handleSave}>Save</button>
</> : 

<>
   <table>

    <thead>
      <tr>
        <th>Ranking</th>
        <th>Name</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      {highScores.map((highScore, i)=>{
        return (
          <tr key={`${highScore.name} ${highScore.score} ${i}`}>
       <td>{i + 1}</td>
       <td>{highScore.name}</td>
       <td>{highScore.score}</td>
      </tr>
        )
      })}
      
    </tbody>
   </table>
</>} 

</div>

      )
    }
     



  


export default InfoResult