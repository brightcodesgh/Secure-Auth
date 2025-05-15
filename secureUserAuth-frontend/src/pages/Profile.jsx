import React,{useState ,useEffect} from 'react';
import { appConfig } from '../../config/appConfig.js';

const Profile = ({ user }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(()=>{
    const handleUserDetails = async () =>{
      try{
        const res = await fetch(appConfig.getUserEP,{
          method:'GET',
          credentials:'include',
        })
        
        if(res.ok){
          const data = await res.json();
          setUserName(data.data.name);
          setUserEmail(data.data.email);
          console.log(data);
        }
       
      }catch(error){
        console.log(error);
      }
      
    }
    handleUserDetails()
  },[])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">User Profile</h2>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <div className="p-3 bg-gray-100 rounded-md text-gray-500 font-semibold">
             {userName}
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <div className="p-3 bg-gray-100 rounded-md text-gray-500 font-semibold">
              {userEmail}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
