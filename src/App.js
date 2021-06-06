import './App.scss';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './components/footer/Footer'
import Home from './components/home/Home';
import Notfound from './components/pages/Notfound';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Home />
            <Footer />
          </Route>
          <Route path='*'>
            <Notfound />
          </Route>
        </Switch>
      </Router >
    </div>
  );
}

export default App;
