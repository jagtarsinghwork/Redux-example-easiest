import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store'
import { Menu } from './components/Menu';
function App() {
  return (
    <Provider store={store}>
      <Home />
      <Menu />
    </Provider>
  );
}

export default App;
