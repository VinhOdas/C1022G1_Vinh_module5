import './App.css';
const students = [
  {
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
]
function App() {

  return (
    <div className="App">
     
     <div style={{width: "100%"}}>
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>company</th>
          <th>contact</th>
          <th>country</th>
        </tr>
      </thead>
     
    {
      
        students.map((student,index) =>(
       <tbody>
        <tr key={index}>
          <td>{index+1}</td>
          <td>{student.company}</td>
          <td>{student.contact}</td>
          <td>{student.country}</td>
        </tr>
        </tbody>
      ))
    }
    
     </table>
  </div>

    </div>
  );
}

export default App;
