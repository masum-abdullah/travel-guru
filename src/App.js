import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import News from './Components/News/News';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <div className="app-background">
        <div className="app-overlay">
          <Router>
            <Switch>
              <Route path="/news">
                <News></News>
              </Route>
              <Route path="/destination">
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
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
