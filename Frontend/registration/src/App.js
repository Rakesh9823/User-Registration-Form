
import Details from './components/Details';
import Message from './components/Message';
import Registration from './components/Registration';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/details' element={<Details />} />
        <Route path='/message' element={<Message />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
