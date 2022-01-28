
import './App.css';
import Register from './components/Login/Register';
import Login from './components/Login/Login';
import Forgetpw from './components/Login/Forgetpw';
import {Switch , Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route  path="/Register" component={Register}/>
          <Route  path="/forgetpw" component={Forgetpw}/>
        </Switch>
    </div>
  );
}

export default App;
