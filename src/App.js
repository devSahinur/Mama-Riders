import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/rider/:id">
        <Destination></Destination>
      </Route> 
      <Route path="/blog">
        <Blog></Blog>
      </Route> 
      <Route path="/contact">
        <Contact></Contact>
      </Route> 
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/">
        <Home></Home>
      </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
