import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
//Components
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
import NewFriend from './components/NewFriend'


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/friends'>Friends List</Link>
            </li>
            <li>
              <Link to='/newfriend'>Add A Friend</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <PrivateRoute exact path='/friends' component={FriendsList} />
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/newfriend' component={NewFriend} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;