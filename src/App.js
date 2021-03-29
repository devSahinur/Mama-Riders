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
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <h1>Email {loggedInUser.email}</h1> */}
      <Router>
      <Header></Header>
        <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/rider/:id">
          <Destination></Destination>
        </PrivateRoute> 
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
    </UserContext.Provider>
  );
}

export default App;
