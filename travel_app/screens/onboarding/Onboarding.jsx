import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { Slides } from '../../components'

const Onboarding = () => {
    const slides = [
        {
            id: 1,
            image: require('../../assets/images/1.png'),
            title: 'Find the perfect place to stay'
        },
        {
            id: 2,
            image: require('../../assets/images/2.png'),
            title: 'Discover the world'
        },
        {
            id: 3,
            image: require('../../assets/images/3.png'),
            title: 'Find the best Hotels in the world'
        },
    ]
    /* flatlist enables us to render lists*/ 
  return (
    <FlatList
    pagingEnabled /*able to scroll from one page to another*/
    horizontal /*set the direction for scrolling */
    showsHorizontalScrollIndicator={false}/*position we are at which we scroll to false */
    data={slides}
    keyExtractor={(item) => item.id}
    renderItem={({item})=> <Slides item={item}/>}
    />
      
      
  )
}

export default Onboarding
