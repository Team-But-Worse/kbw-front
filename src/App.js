import UserInput from './UserInput'
import io from 'socket.io-client'

const URL = process.env.URL || 'http://localhost:3001/'
const socket = io(URL);
function App() {
socket.emit('join', {clientId: socket.id})
  return (<>
    <h1>hello world</h1>
    <UserInput/>
    </>
  );
}

export default App;
