import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
      <Switch>
      <Route path="/home">
        <Header></Header>
        <Home></Home>
      </Route> 
      <Route path="/rider/:name">
        <Header></Header>
        <Destination></Destination>
      </Route> 
      <Route path="/blog">
        <Header></Header>
        <Blog></Blog>
      </Route> 
      <Route path="/contact">
        <Header></Header>
        <Contact></Contact>
      </Route> 
      <Route path="/login">
        <Header></Header>
        <Login></Login>
      </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
