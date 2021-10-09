import { BrowserRouter,Switch,Route,Link } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Header></Header>
   <Switch>
     <Route path="/home">
       <Home></Home>
     </Route>
     <Route path="/login">
       <Login></Login>
     </Route>
     <Route path="/register">
       <Register></Register>
     </Route>
   </Switch>
   </BrowserRouter>
    </div>
  );
}

export default App;
