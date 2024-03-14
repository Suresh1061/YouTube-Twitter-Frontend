import React from 'react'
import videoTube from "../assets/vt.png"

const Logo = ({width='w-[160px]'}) => {
    return (
        <div>
            <img src={videoTube} alt="" className={`${width}`} />
        </div>
    )
}

export default Logo
