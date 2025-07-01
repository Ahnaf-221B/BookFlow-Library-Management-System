import React from 'react'
import Banner from '../../components/Banner'
import FeaturedBook from '../../components/FeaturedBook'
import News from '../../components/News'
import CategoryCard from '../CategoryCard/CategoryCard'
import NewsLetter from '../../components/NewsLetter'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <CategoryCard></CategoryCard>
        <FeaturedBook></FeaturedBook>
       
        <News></News> 
        <NewsLetter></NewsLetter>
    </div>
  )
}

export default Home