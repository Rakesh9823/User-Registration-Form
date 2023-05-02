
import Details from './components/Details';
import Registration from './components/Registration';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/details' element={<Details />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
