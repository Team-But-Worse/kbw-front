import UserInput from './UserInput'
import io from 'socket.io-client'
import React from 'react';

const URL = process.env.URL || 'http://localhost:3002/messages';

const socket = io.connect(URL);


class App extends React.Component
{
  constructor()
  {
    super(this)
  }
  // socket.emit('join', {clientId: socket.id})
  submitData = (event) =>
  {
    event.preventDefault();
    console.log(event.target.idea.value)
    socket.emit('question', {
      id: socket.id,
      idea: event.target.idea.value
    })
  }
  render()
  {
    return (
      <>
        <h1>hello world</h1>
        <UserInput
          submitData={ this.submitData } />
      </>
    );
  }
}

export default App;
