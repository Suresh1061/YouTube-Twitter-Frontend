import React from 'react'

const Button = ({
    children,
    type = 'button',
    bgColor = "bg-[#c82ae8]",
    textColor = "text-white",
    className = '',
    ...props
}) => {
    return (
        <button
            type={type}
            {...props}
            className={` px-4 py-2 ${bgColor} ${textColor}  rounded-lg duration-200 w-full ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
