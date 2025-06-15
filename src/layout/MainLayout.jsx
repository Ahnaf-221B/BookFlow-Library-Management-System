import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loader from '../pages/Loader/Loader'

const MainLayout = () => {
  const { state } = useNavigation();

  return (
		<div>
			<Navbar></Navbar>

			<main>
        {state === "loading" ? <Loader></Loader> : <Outlet>
          </Outlet>}</main>

			<Footer></Footer>
		</div>
	);
}

export default MainLayout
