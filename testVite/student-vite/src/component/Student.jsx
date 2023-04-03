import React from 'react'
import studentList from './model/StudentList'

export default function Student() {
  return (
    <>
     <div className="row">
          <table className="table table-dark" border="1" style={{ textAlign: 'center' }}>
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody align="center">

              {
                studentList.student.map(studentMap =>(
                    <>
                    <tr key={studentMap}>
                        <td>{studentMap.id}</td>    
                        <td>{studentMap.name}</td>    
                    </tr>
                    </>
                ))
              }

            </tbody>
          </table>

        </div>

    </>
  )
}
