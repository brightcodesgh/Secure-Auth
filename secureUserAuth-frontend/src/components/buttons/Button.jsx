import React from 'react'

function Button({
    children,
    type="submit",
    bgColor = "",
    textColor="",
    className="",
    ...props
}) {
  return (
    <button
    className={`${bgColor} ${textColor} ${className}`}
    {...props}
    type={type}
    >
      {children}
    </button>
  )
}

export default Button