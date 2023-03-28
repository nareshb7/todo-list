import { Provider } from 'react-redux';

import Store from './redux/Store';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import {Route , Routes} from 'react-router-dom'
import SignIn from './components/SignIn';
import Home from './components/Home';

function App() {
  return (
    <Provider store={Store}>
      <div>
        <Header />
        <Routes>
          <Route path='login' element={ <Login/> } ></Route>
          <Route path='signin' element={ <SignIn />}></Route>
          <Route path='home/:obj' element={ <Home />}></Route>
        </Routes>
        
      </div>
    </Provider>
  );
}

export default App;
