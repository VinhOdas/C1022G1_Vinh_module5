import {Component} from 'react'

class Student extends Component{
<<<<<<< HEAD

=======
>>>>>>> cc711da36ace554ba730b1ffb4ef80988b9c00f4
   
    
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
        )


        }
    }
<<<<<<< HEAD
=======

}

 


>>>>>>> cc711da36ace554ba730b1ffb4ef80988b9c00f4
export default Student