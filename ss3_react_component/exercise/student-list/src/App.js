
import StudentList from './components/StudentList';

const students = [
  { id: 1, name: 'Vinh', age: 20, address: 'QB' },
  { id: 2, name: 'VInh1', age: 21, address: 'DN' },
  { id: 3, name: 'Vinh2', age: 19, address: 'QN' },
];
function App() {
  return (
    <div className="App">
      <StudentList  students = {students}  />
    </div>
  );
}

export default App;
