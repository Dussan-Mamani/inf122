import './App.css';
import Login from './components/Login';
import Perfil from './components/Perfil';
import Registro from './components/Registro';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    
function App() {
  return (
    <div className="App">
      <Router>
<Routes>
  <Route path='/' element={<Navbar/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/registro' element={<Registro/>}/>
  <Route path='/perfil' element={<Perfil/>}/>
</Routes>
  </Router>
  
    </div>
  );
}

export default App;