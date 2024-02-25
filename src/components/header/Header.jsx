import React, { useState } from 'react'
import { Logo } from "../index"
import { Link, useNavigate } from 'react-router-dom'
import { Search } from './Search'
import { FiSearch } from "react-icons/fi";
import { useSelector } from 'react-redux';
import RightBar from './RightBar';
import LeftBar from './Leftbar';

const Header = () => {
  const [openRightBar, setOpenRightBar] = useState(false)
  const navigate = useNavigate()
  const authStatus = useSelector(state => state.auth?.status)
  const profileImg = useSelector(state => state.auth?.userData?.avatar?.url)
  const user = useSelector(state => state.auth?.userData)

  // console.log(authStatus, " ", profileImg)
  return (
    <div >
      <nav className=' w-full h-[70px] flex justify-between items-center bg-[#121212] shadow border-b border-gray-600  sticky top-0  px-10'> {/*  bg-slate-800 shadow border-b border-gray-500 */}
        <div>
          <Link>
            <Logo />
          </Link>
        </div>
        <div className=' relative w-full sm:w-1/3 hidden sm:block'>
          <div>
            <Search className=' pl-10' />
            <FiSearch color='gray' className='absolute top-3 left-3' />
          </div>
        </div>
        {
          !authStatus ?
            <div className='space-x-5'>
              <Link to='/login'>
                <button className=' px-6 py-2 rounded-full text-white hover:bg-[#930ced] duration-200 font-medium'>
                  Log in
                </button>
              </Link>
              <Link to='/signup'>
                <button className=' px-6 py-2 rounded-full text-white bg-[#930ced] duration-200 font-medium'>
                  Sign up
                </button>
              </Link>
            </div> :
            <div>
              <button onClick={() => setOpenRightBar(!openRightBar)}>
                <img src={profileImg} alt="" className=' w-10 h-10 rounded-full border-2  cursor-pointer border-[#930ced] object-cover' />
              </button>
            </div>
        }
      </nav>
      {
        openRightBar ? <RightBar profileImg={profileImg} username={user.username} fullName={user.fullName} /> : null
      }
      <LeftBar />
    </div>
  )
}

export default Header
