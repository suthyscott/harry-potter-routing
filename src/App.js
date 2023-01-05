import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Spells from './components/Spells';
import Characters from './components/Characters';
import Header from './components/Header';
import CharDetails from './components/CharDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/characters' element={<Characters/>}/>
        <Route path='/spells' element={<Spells/>}/>
        <Route path='/character/:name' element={<CharDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
