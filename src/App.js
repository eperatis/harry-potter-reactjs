import './App.scss';
import StudentsList from './component/StudentsList';
import StaffList from './component/StaffList';
import Homepage from './component/Homepage';

function App() {
  return (
    <div className="App">
      <Homepage />
      <StudentsList />
      <StaffList />
    </div>
  );
}

export default App;
