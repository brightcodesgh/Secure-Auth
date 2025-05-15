import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { login, logout } from '../store/authSlice';
import { appConfig } from '../../config/appConfig';

function AuthLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector(state => state.auth.status);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        let res = await fetch(`${appConfig.getUserEP}`, {
          method: 'GET',
          credentials: 'include',
        });

        if (res.ok) {
          const data = await res.json();
          dispatch(login({ userData: data.data }));
        } 
        else if (res.status === 401) {
          const refreshRes = await fetch(`${appConfig.refreshTokenEP}`, {
            method: 'POST',
            credentials: 'include',
          });

          if (refreshRes.ok) {
            res = await fetch(`${appConfig.getUserEP}`, {
              method:'GET',
              credentials: 'include',
            });

            if (res.ok) {
              const data = await res.json();
              console.log(data)
              dispatch(login({ userData: data.data }));
            } else {
              dispatch(logout());
            }
          } else {
            dispatch(logout());
          }
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error('Auth check error:', error);
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
    
  }, [authStatus]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authStatus) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default AuthLayout;
