import './App.css';
import StudentListComponent from './components/StudentListComponent';
import HeaderComponent from './components/HeaderComponent.js';
import FooterComponent from './components/FooterComponent.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateStudentComponent from './components/CreateStudentComponent.js';
import UpdateStudentComponent from './components/UpdateStudentComponent.js';
import ViewStudentComponent from './components/ViewStudentComponent.js';

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
            <Route path="/update-student/:id" component={UpdateStudentComponent}></Route>
            <Route path="/view-student/:id" component={ViewStudentComponent}></Route>
          </Switch>

        </div>
        <FooterComponent />

      </Router>
    </div>
  );
}

export default App;
