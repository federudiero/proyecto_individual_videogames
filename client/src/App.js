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
 




    <Route exact path='/'>
      <Landing/>
    </Route>

    <Route path='/home'> 
      <Home/>
    </Route>

    <Route path='/form'>
      <Form/>
    </Route>


    <Route  path='/detail/:id'>
      <Detail/>
    </Route>
     
    </div>
  );
}

export default App;
