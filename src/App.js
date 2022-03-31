import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contuct from './components/Contuct/Contuct';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Meal from './components/Meal/Meal';
import Meals from './components/Meals/Meals';
import NotFound from './components/NotFound/NotFound';
import Resturant from './components/Resturant/Resturant';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-2xl'>hello i am main file</h1>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contuct></Contuct>}></Route>
        <Route path='/meal' element={<Meal> </Meal>}></Route>
        <Route path='/meals/:id' element={<Meals> </Meals>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* <Route path='/meal' element={<Meal> </Meal>}></Route> */}
        <Route path='/resturant' element={<Resturant></Resturant>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}

export default App;
