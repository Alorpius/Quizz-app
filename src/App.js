import Main from "./container/Main";
import { jsQuizz } from "./constance";
import "./App.css"
function App() {
  // useEffect(() => {
  // getQuestions();
  //}, []);

  //const getQuestions = async () => {
  //try {
  //const response = await fetch(
  //"https://644982a3e7eb3378ca4ba471.mockapi.io/questions"
  //);
  //const questionResponse = await response.json();
  //console.log(questionResponse);
  //} catch (error) {}

  return (
    <div className="App">
      <Main questions={jsQuizz.questions} />
    </div>
  );
}

export default App;
