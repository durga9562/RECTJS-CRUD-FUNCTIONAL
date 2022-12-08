import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import TravelList from './components/TravelList';
import CreateTravel from './components/CreateTravel';
import TravelDetail from './components/TravelDetail';
import TravelEdit from './components/TravelEdit';


function App() {
  return (
    <div className="App">
      <h1>Travels App</h1>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<TravelList/>}></Route>
        <Route path='/travel/create' element={<CreateTravel/>}></Route>
        <Route path='/travel/detail/:travelid' element={<TravelDetail/>}></Route>
        <Route path='/travel/edit/:travelid' element={<TravelEdit/>}></Route>

       </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
