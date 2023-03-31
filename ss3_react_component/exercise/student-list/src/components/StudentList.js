import { Component } from "react";
import Student  from "./Student";
class StudentList extends Component{

    

    render(){
        
        const students = this.props.students.map(student =>(
            <Student 
            id={student.id}
            name ={student.name}
            age = {student.age}
            address = {student.address}  />
        ));

        return(
            <div>
                <h2>Student List</h2>
                {students}
            </div>
        )
    }


}
export default StudentList