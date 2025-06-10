import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home/Home.jsx'
import SignIn from './pages/SignIn/SignIn.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'

const router = createBrowserRouter([

  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index:true,
        element: <Home></Home>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      }
    ]
  }
])
createRoot(document.getElementById("root")).render(
	<StrictMode>
    <AuthProvider>
      <ToastContainer></ToastContainer>
		  <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
		
	</StrictMode>
);
