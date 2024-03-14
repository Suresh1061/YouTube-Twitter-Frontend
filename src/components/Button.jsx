import React from 'react'

const Button = ({
    children,
    type = 'button',
    textColor = "text-white",
    className,
    bgColor = 'bg-purple-500 hover:bg-purple-600',
    ...props
}) => {
    return (
        <button
            type={type}
            {...props}
            className={`${textColor} duration-200  font-semibold ${bgColor}  ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
