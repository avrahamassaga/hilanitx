// import logo from './logo.svg';
import './App.css';
import {HashRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import Scanner from './Components/Scanner';
import Edit from './Components/Edit';
import Ready from './Components/Ready';
import Final from './Components/Final';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Header/>
        <Routes>
          <Route path='/' element={<Scanner/>}/>
          <Route path='/edit' element={<Edit/>}/>
          <Route path='/ready' element={<Ready/>}/>
          <Route path='/final' element={<Final/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
