import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleVideoLike } from '../../server/src/controllers/like.controller'
import { findVideo } from './store/slices/videoSlice'

const App = () => {
  const dispatch = useDispatch()
  return (
    <div>
      {/* <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div> */}
      <button onClick={() => dispatch(findVideo('65b54a6f3b4c9a1a9c6fa272'))}>click</button>
    </div>
  )
}

export default App
















// import React, { useState } from 'react'
// import axios from 'axios'
// import Input from './components/Input'
// import Button from './components/Button'

// const App = () => {
//   const [user, setUser] = useState({name:"", email:'', password:'', avatar:''})
//   const handelChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user, [name] : value
//     })
//   }

//   const handelSubmit = async (e) => { 
//     e.preventDefault();
//     console.log(user);
//     const { name, email, password, avatar } = user;
//     const formData = new FormData()
//     formData.append('username', name)
//     formData.append('email', email)
//     formData.append('password', password)
//     formData.append('avatar', avatar)
//     try {

//       const res = await axios.post('http://localhost:8000/api/v1/users/register', formData)
//       console.log(res)

//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     // <form onSubmit={handelSubmit}>
//     //   <label htmlFor=""> name :
//     //     <input type="text" name='name' onChange={handelChange} />
//     //   </label>
//     //   <label htmlFor="">
//     //     email:
//     //     <input type="text" name='email' onChange={handelChange} />
//     //   </label>
//     //   <label htmlFor="">
//     //     password:
//     //     <input type="text" name='password' onChange={handelChange} />
//     //   </label>
//     //   <label htmlFor="">
//     //     avatar:
//     //     <input type="file" accept='.png, .jpg, .jpeg' onChange={(e)=>setUser({...user, avatar:e.target.files[0]})}/>
//     //   </label>
//     //   <button type='submit'>submit</button>
//     // </form>
//     // <Input/>
//     <>
//   <Button/>
//     </>
//   )
// }

// export default App


