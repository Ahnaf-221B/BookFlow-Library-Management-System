import React from 'react'
import Banner from '../../components/Banner'
import FeaturedBook from '../../components/FeaturedBook'
import News from '../../components/News'
import CategoryCard from '../CategoryCard/CategoryCard'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <CategoryCard></CategoryCard>
        <FeaturedBook></FeaturedBook>
        <News></News>
    </div>
  )
}

export default Home