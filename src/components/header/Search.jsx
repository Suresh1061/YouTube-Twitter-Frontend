import React from 'react'
import Input from '../Input'

export const Search = ({ className = ''}) => {
    return (
        <>
            <div className='hidden sm:block'>
                <Input placeholder='Search' className={className} />
            </div>
        </>
    )
}
