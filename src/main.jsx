import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Home, LoginPage, SignupPage } from './pages/index.js'
import { Provider } from 'react-redux'
import store from './store/store.js'
import AuthLayout from './components/AuthLayout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={
      <AuthLayout authentication>
        <App />
      </AuthLayout>}>
      <Route path='' element={
        <AuthLayout authentication>
          <Home />
        </AuthLayout>} />
      <Route path='/login' element={
        <AuthLayout authentication={false}>
          <LoginPage />
        </AuthLayout>} />
      <Route path='/signup' element={
        <AuthLayout authentication={false}>
          <SignupPage />
        </AuthLayout>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
