import React, { forwardRef, useId } from 'react'

const Input = ({
    type = 'text',
    label,
    className = '',
    ...props
}, ref) => {
    const id = useId()
    return (
        <div className=' w-full'>
            {label && <label
                htmlFor={id}
                className=' inline-block mb-1 pl-1 font-medium'
            >{label}</label>}
            <input
                type={type}
                id={id}
                ref={ref}
                {...props}
                className={` px-3 py-2 bg-gray-900 text-white border border-black/10 outline-none rounded-lg duration-200 focus:bg-gray-900 w-full ${className}`}
            />
        </div>
    )
}

export default forwardRef(Input)