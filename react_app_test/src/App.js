import './App.css';
import StudentListComponent from './components/StudentListComponent';
import HeaderComponent from './components/HeaderComponent.js';
import FooterComponent from './components/FooterComponent.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateStudentComponent from './components/CreateStudentComponent.js';

function App() {
  return (
    <div>
      <Router>

        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={StudentListComponent}></Route>
            <Route path="/students" component={StudentListComponent}></Route>
            <Route path="/add-student" component={CreateStudentComponent}></Route>
            
          </Switch>

        </div>
        <FooterComponent />

      </Router>
    </div>
  );
}

export default App;
