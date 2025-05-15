import React from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const ShowPasswordButton = ({ isVisible, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
        {isVisible ? 
            <>  
                <div className='flex gap-2'>
                    <EyeSlashIcon className='h-6 w-6' /> 
                    <span className='text-sm text-primary'>Hide Password</span>
                </div>
                
            </>
            : 
            <>  
                <div className='flex gap-2'>
                    <EyeIcon className='h-6 w-6' /> 
                    <span className='text-sm text-primary'>Show Password</span>
                </div>
            </>
        }
    </button>
  );
};

export default ShowPasswordButton;
