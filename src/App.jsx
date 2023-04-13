import './App.css';
import {Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Events from './pages/Events';
import EventsList from './pages/EventsList';
import { createContext } from 'react';
import EventsAction from './components/EventsAction';
import EventDetails from './pages/EventDetails';
export const ContextValue = createContext()

function App() {

  const {change,setChange} = EventsAction()
  const contextEvent= {change,setChange}
  return (
    
    <ContextValue.Provider value={contextEvent}>
    <div className="App">
      <NavBar/>

      <div></div>

      <Routes>
        <Route path='/Events' element={<Events/>}></Route>
        <Route path='/Events/:i' element={<Events/>}></Route>
        <Route path='/EventsList' element={<EventsList/>}></Route>
        <Route path='/' element={<EventsList/>}></Route>
        <Route path='/EventDetails' element={<EventDetails/>}></Route>
        <Route path='/EventDetails/:index' element={<EventDetails/>}></Route>
      </Routes>

    </div>
    </ContextValue.Provider>
   
  );
}

export default App;
