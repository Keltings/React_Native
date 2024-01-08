import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './slides.style'

/*receive an item from a page*/
/*components are like tags whenever using a compnent make sure it imported on to */
const Slides = ({item}) => {
  return (
    /*view is just like a container, everything we write will be inside it*/
    <View>
        <Image source={item.image} style={styles}/>

            <View style={styles.stack}>
                <Text>Travel Insights</Text>
            </View>
    </View>
  )
}

export default Slides