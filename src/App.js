import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path='/adventure' component={Home}/>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
  