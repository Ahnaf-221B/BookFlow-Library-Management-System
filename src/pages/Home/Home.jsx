import React from 'react'
import Banner from '../../components/Banner'
import FeaturedBook from '../../components/FeaturedBook'
import News from '../../components/News'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <FeaturedBook></FeaturedBook>
        <News></News>
    </div>
  )
}

export default Home