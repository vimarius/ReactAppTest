import './App.css';
import StudentListComponent from './components/StudentListComponent';
import HeaderComponent from './components/HeaderComponent.js';
import FooterComponent from './components/FooterComponent.js';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
      <StudentListComponent />
    </div>
    <FooterComponent />
    </div>
  );
}

export default App;
