import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom' 
export default function User() {
    const navigation = useNavigate
    const users = useSelector(state => state.users);
    const dispatch = useDisPatch();
    console.log(users);

    useEffect(() => {

        dispatch(getAllStudent());
    }, []);

    const handleDelete = (id) =>{
        navigation(`/delete/${id}`)
        
    }


  return (
    <>
     <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
            
        </tbody>
      </table>
    </div>
 </>

  )
}
