import React,{  useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline';
import { appConfig } from '../../config/appConfig';

function LogoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const logoutUser = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${appConfig.logOutEP}`, {
        method: 'POST',         
        credentials: 'include', 
      });
      if (res.ok) {
        dispatch(logout());    
        navigate('/login');    
      } else {
        console.error('Failed to logout');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }finally{
      setLoading(false)
    }
  };
  

  return (
    <button onClick={logoutUser}>
      {loading ? "logging out" : 
        <div className='flex gap-3'>
          <div className='w-8 h-7'>
            <ArrowLeftEndOnRectangleIcon /> 
          </div>
          <p>Logout</p>
          
        </div>}
    </button>
  );
}

export default LogoutPage;
