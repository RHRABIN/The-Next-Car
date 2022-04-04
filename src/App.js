import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home/Home'
import Review from '../src/components/Review/Review'
import Blogs from '../src/components/Blogs/Blogs'
import Dashboard from '../src/components/Dashboard/Dashboard'
import NotFound from '../src/components/NotFound/NotFound'
import About from '../src/components/About/About'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
