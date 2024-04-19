import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Loginp from './Components/Loginp';
import Abhi from './Components/Abhi';
import Signi from './Components/Signi';
import HomeMain from './Components/HomeMain';
import Dash from './Components/Dash';
import Scroll from './Components/Scroll';
import Pizza from './Components/Pizza';
import Mandhi from './Components/Mandhi';
import Biriyani from './Components/Biriyani';
import Burger from './Components/Burger';
import Shawarma from './Components/Shawarma';
import Sandwitch from './Components/Sandwitch';
import Juice from './Components/Juice';
import Sharja from './Components/Sharja';

function App() {
  return (
    <div className="App">
{/*   
      <Dash/>
   <Nav/>  */}


{/* <Scroll/> */}
   <br/><br/><br/>
   <Routes>
   <Route path='/' element={<><Nav/><Dash/><Abhi/><HomeMain/></>}/>
    <Route path='/sign' element={<Signi/>}/>
    <Route path='/log' element={<Loginp/>}/>
    <Route path='/Homep' element={<><Nav/><HomeMain/><Dash/><Abhi/></>}/>
    <Route path='/b' element={<><Nav/><Burger/></>}/>
    <Route path='/p' element={<><Nav/><Pizza/></>}/>
    <Route path='/m' element={<><Nav/><Mandhi/></>}/>
    <Route path='/bi' element={<><Nav/><Biriyani/></>}/>
    <Route path='/s' element={<><Nav/><Shawarma/></>}/>
    <Route path='/sa' element={<><Nav/><Sandwitch/></>}/>
    <Route path='/j' element={<><Nav/><Juice/></>}/>
    <Route path='/sh' element={<><Nav/><Sharja/></>}/>

   </Routes>
   <br/><br/><br/>
   {/* <HomeMain/> */}
    </div>
  );
}

export default App;
