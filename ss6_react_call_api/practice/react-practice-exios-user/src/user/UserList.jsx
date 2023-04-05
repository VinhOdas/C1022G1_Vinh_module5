import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function UserList() {

    const [user, setUser] = useState([])
    useEffect(() =>{
      axios.get('http://localhost:3000/users')
      .then((res) =>{
        setUser(res.data)

      })
      .catch(err => console.log(err));
    }, [])
  return (
    <>
        <h1> UserList </h1>
        <table>
          <thead>
            <tr>
              <th>STT </th>
              <th>Name </th>
            </tr>
          </thead>
          <tbody align = "center">
            {
              user.map((userList =>(
                <tr>
                <td>{userList.id}</td>
                <td>{userList.name}</td>
              </tr>
              )))
            }

          </tbody>
        </table>

    </>
  )
}
