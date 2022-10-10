import UserInput from './UserInput'
import io from 'socket.io-client'
import React from 'react';
import IdeasForRating from './IdeasForRating'
// require('dotenv').config();

const URL = process.env.URL || 'http://localhost:3002/messages'
const socket = io.connect(URL);
class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        questions: [],
        answers: [],
    }
  }
  componentDidMount(){
    socket.on('answers', (payload) => {
      console.log(this.state.answers)
      let newAnswers = [...this.state.answers];
      newAnswers[newAnswers.length] = payload;
      this.setState({
        answers: newAnswers
      })
    } )
    socket.on('questions', (payload) => {
      let newQuestions = [...this.state.questions];
      newQuestions[newQuestions.length] = payload;
      this.setState({
        questions: newQuestions
      })
    } )
  }
submitData = (event) => {
  event.preventDefault();
  console.log(this.state.answers)
  console.log(this.state.questions)
  socket.emit('questions', {
    id: socket.id,
    idea: event.target.idea.value
  })
}
render(){
  return (<>
    <h1>hello world</h1>
    <UserInput
    submitData={this.submitData}/>
    <IdeasForRating
    questions={this.state.questions}/>
    </>
    
  );
}}

export default App;
