import Signup from './component/signup';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
