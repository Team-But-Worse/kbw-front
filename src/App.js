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
      let newAnswer = payload;
      console.log(payload)
      alert(payload.answer)
      this.setState({
        answers: [...this.state.answers, newAnswer]
      })
    } )
    socket.on('questions', (payload) => {
      let newQuestions = payload;
      this.setState({
        questions: [...this.state.questions, newQuestions]
      })
    } )
  }
submitQuestion = (event) => {
  event.preventDefault();
  console.log(this.state.questions)
  socket.emit('questions', {
    id: socket.id,
    idea: event.target.idea.value
  })
}
submitAnswer = (event) => {
  event.preventDefault();
  console.log(event.target.answers.value)
  socket.emit('answers', {
    id: socket.id,
    answer: event.target.answers.value
  })
}
render(){
  return (<>
    <h1>hello world</h1>
    <UserInput
    submitQuestion={this.submitQuestion}/>
    <IdeasForRating
    questions={this.state.questions}
    submitAnswer={this.submitAnswer}/>
    </>
    
  );
}}

export default App;
