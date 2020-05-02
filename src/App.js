import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'
import { setValue } from './store/actions'
import { useDispatch } from 'react-redux'
import Home from './containers/Home'

function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-brand" >Movie-Search</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies">Movies</Link>
              </li>
            </ul>
            <div>
              <DebounceInput
                className="form-inline my-2 my-lg-0"
                minLength={2}
                debounceTimeout={300}
                placeholder="search here.."
                onChange={event => dispatch(setValue((event.target.value)))} />
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
