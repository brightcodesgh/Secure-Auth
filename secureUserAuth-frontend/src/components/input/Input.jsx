import React, { useId, forwardRef } from 'react';

const Input = forwardRef(function input({
  label,
  type = "text",
  className,
  ...props},
  ref){

  const id = useId();

  return(
    <div className="w-full">
      {label && (
        <label 
          className='inline-block pb-1 pl-2 text-primary peer'
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        ref={ref}
        className='block px-2.5 
          pb-2 pt-2 w-full text-primary 
          text-lg font-sans bg-transparent 
           
          border-2 border-gray-400 
          appearance-none focus:outline-none 
          focus:ring-0 focus:border-primary peer
          mb-2 rounded-xl'
        id={id}
        {...props}
      
      />
    </div>
  )

})

export default Input