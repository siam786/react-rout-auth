import { BrowserRouter,Switch,Route,Link } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Notfound from './Component/Notfound/Notfound';
import Register from './Component/Register/Register';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Header></Header>
   <Switch>
     <Route exact path="/">
       <Home></Home>
     </Route>
     <Route path="/home">
       <Home></Home>
     </Route>
     <Route path="/login">
       <Login></Login>
     </Route>
     <Route path="/register">
       <Register></Register>
     </Route>
     <Route path="/notfound">
       <Notfound></Notfound>
     </Route>
   </Switch>
   </BrowserRouter>
    </div>
  );
}

export default App;
