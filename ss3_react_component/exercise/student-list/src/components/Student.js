import {Component} from 'react'

class Student extends Component{
<<<<<<< HEAD

  
    
    render(){
        return 
        <table>
            
        </table>
  
=======
   
    
    render(){
        return (
            <table   style={{border: "2"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={Student.toString}>
                        <td>{this.props.id}</td>
                        <td>{this.props.name}</td>
                        <td>{this.props.age}</td>
                        <td>{this.props.address}</td>
                        
                    </tr>
                </tbody>
            </table>
        );

>>>>>>> da6b47f2cc82e8a939a58bc1a223b52e3a81c758

    }

}
<<<<<<< HEAD
 
=======

>>>>>>> da6b47f2cc82e8a939a58bc1a223b52e3a81c758
export default Student