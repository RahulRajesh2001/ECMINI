import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUsers } from '/src/stateManagement/userSlice'; 

const baseUrl = import.meta.env.VITE_BASEURL;

const Card = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/v1/allUsers`);
        dispatch(setUsers(response.data.users))
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const users = useSelector((state) => state.users.users);


  return (
    <div className='ml-5 mt-5 gap-5 flex justify-evenly flex-wrap'>
      {users.map((user) => (
        <div key={user.id} className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{user.name}</div>
            <p className="text-gray-700 text-base font-bold">Email : {user.email}</p>
            <p className="text-gray-700 text-base font-bold">Role : {user.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
