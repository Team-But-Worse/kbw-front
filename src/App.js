import UserInput from './UserInput'
import io from 'socket.io-client'

const URL = process.env.URL || 'http://localhost:3002/messages'
const socket = io.connect(URL);
function App() {
socket.emit('join', {clientId: socket.id})

console.log(socket.id)
  return (<>
    <h1>hello world</h1>
    <UserInput/>
    </>
  );
}

export default App;
