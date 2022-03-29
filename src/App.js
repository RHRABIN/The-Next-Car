import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <h4 className='text-2xl'>Give me money to save more</h4>
      <h1 className='text-4xl'>Welcome tailwind</h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
