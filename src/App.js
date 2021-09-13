import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

//pages
import StudentsList from './component/StudentsList';
import StaffList from './component/StaffList';
import Homepage from './component/Homepage';
import Navigation from './component/Navigaton';

function App() {
  return (
    <Router>
      <div>
        <div class="row">
          <Navigation />
        </div>
        <div class="row">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home" component={Homepage} />
            <Route exact path="/students" component={StudentsList} />
            <Route exact path="/staff" component={StaffList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
