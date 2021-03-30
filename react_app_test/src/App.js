import './App.css';
import StudentListComponent from './components/StudentListComponent';
import HeaderComponent from './components/HeaderComponent.js';
import FooterComponent from './components/FooterComponent.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
      <HeaderComponent />
      <div className="container">
        <Switch> 
          <Route path="/" component={StudentListComponent}></Route>
          <Route path="/students" component={StudentListComponent}></Route>
      <StudentListComponent />
      </Switch>
      
    </div>
    <FooterComponent />
    </div>
    </Router>
    </div>
  );
}

export default App;
