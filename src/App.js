// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store'
import { Menu } from './components/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
      </Router>
    </Provider>
  );
}

export default App;
