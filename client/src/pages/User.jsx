import React, { useEffect, useState } from 'react'
import { getUser, deleteUser, updateUser } from './redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state?.user);

    useEffect(() => {
        dispatch(getUser());
      }, [dispatch]);

    const handleDelete = (userId) => {
        dispatch(deleteUser(userId));
        dispatch(getUser());
    };

    const onEditClick = async(user) => {
        const updatedUser = {
          ...user,
          name: prompt("Enter new first name", user.name), 
        };
        await dispatch(updateUser({ id: user?._id, data: updatedUser }));
        dispatch(getUser());
      };
      
  return (
    <div>
        <div>
      {users?.getStudent?.length > 0 ?
        users?.getStudent?.map((ele, id) => {
          return (
            <>
              <table style={{ width: "100%", border: "1px solid" }}>
                <tr>
                  <th>Name</th>
                  <th>User Name</th>
                  <th>Password</th>
                </tr>
                <tr>
                  <td>{ele?.name}</td>
                  <td>{ele?.userName}</td>
                  <td>{ele?.passWord}</td>
                  <td>
                    <button onClick={() => onEditClick(ele)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(ele?._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </table>
            </>
          );
        }) : <div>
            <div>
            <h3>No Data</h3>
            <p onClick={()=>navigate('/signUp')} style={{color: 'blue' , cursor: 'pointer'}}>Create New User</p>
            </div>
        </div> }
    </div>
    </div>
  )
}

export default User