import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import {Home,Landing,Form,Detail} from './views'

import {Route} from 'react-router-dom'
import Navbar from './components/navBar/Navbar';
function App() {
  const locations =useLocation()
  return (
    <div className="App">
      { locations.pathname !== '/' &&  <Navbar/>  }
 


    <Route path='/home'> 
      <Home/>
    </Route>


    <Route exact path='/'>
      <Landing/>
    </Route>


    <Route exact path='/form'>
      <Form/>
    </Route>


    <Route exact path='/detail'>
      <Detail/>
    </Route>
     
    </div>
  );
}

export default App;
