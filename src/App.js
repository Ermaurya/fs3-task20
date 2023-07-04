
import './App.css';
import Api from './component/Api'
// import  Service from './component/Service';
import{BrowserRouter} from 'react-router-dom'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Api/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
