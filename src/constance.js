export const jsQuizz={
questions:[

   {
      question:"_____What allows you to pass element from parent to a child in react",
      
       type:"FIB",
       correctAnswer: "props"
   },
   {
      question:"What is javascript",
      choices:[
         "client-side language",
         "server-side language",
         "Router",
         "Api key"
      ],
      type:"MSCQ",
      correctAnswer: "server-side language"
   },
{
question:"Which of the following is not a data type",

choices:[
   "Array",
   "String",
   "Object",
   "useEffect"
],
type:"MCQS",
correctAnswer: "useEffect"

},
{
   question:"which of the following is not a react hook",
   choices:[
       "useReducer",
       "useEffect",
       "useRef",
       "react-router DOM"
   ],
   type:"MCQS",
   correctAnswer: "react-router DOM"
},

{
   question:"Which of the following is not used for styling in programming",
   choices:[
      "SASS",
      "Tailwind",
      "Flexbox",
      "context"
   ],
    type:"MCQS",
    correctAnswer: "context"
}]}

export const initialResult={
  score:0,
  wrongAnswers:0,
  correctAnswers:0
}