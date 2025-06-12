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
import SignUp from './pages/SignUp/SignUp.jsx'
import AddBook from './pages/AddBook/AddBook.jsx'
import Novel from './pages/BookCategory/BooksCategory.jsx'
import BookCategory from './pages/BookCategory/BooksCategory.jsx'
import AllBooks from './pages/AllBooks/AllBooks.jsx'
import BookDetails from './pages/BookDetails/BookDetails.jsx'

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				index: true,
				element: <Home></Home>,
			},
			{
				path: "/signin",
				element: <SignIn></SignIn>,
			},
			{
				path: "/signup",
				element: <SignUp></SignUp>,
			},
			{
				path: "/addbooks",
				element: <AddBook></AddBook>,
			},
			{
				path: "/category/:category",
				element: <BookCategory></BookCategory>,
			},
			{
				path: '/allbooks',
				element:<AllBooks></AllBooks>
			},
			{
				path:'/bookdetail/:id',
				element: <BookDetails></BookDetails>
			}
		],
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
    <AuthProvider>
      <ToastContainer></ToastContainer>
		  <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
		
	</StrictMode>
);
