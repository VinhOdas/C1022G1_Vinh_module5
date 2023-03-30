import './App.css';
import Alert from './components/Alert';

function App() {
  return (
    <div className="App">
      <div className='alert alert-warning' role={alert}>
      <Alert 
     text = "Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
      </div>
     
    </div>
  );
}

export default App;
