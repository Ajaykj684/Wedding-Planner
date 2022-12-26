import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import HomePage from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} /> 
        <Route exact path="/login" element={<Login />} /> 
        <Route exact path="/register" element={<Register />} /> 

      </Routes>
    </Router>
    
   </>
  );
}

export default App;
