import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import CarParking from './components/projects/CarParking';
import Hospital from './components/projects/Hospital';
import Restuarant from './components/projects/Restuarant';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
<Route path= "/" element ={<LandingPage />} />
<Route path= "/projects/parking" element ={<CarParking />} />
<Route path= "/projects/hospital" element ={<Hospital />} />
<Route path= "/projects/food" element ={<Restuarant />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
