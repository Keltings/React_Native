import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React from 'react'
import HeightSpacer from '../Reusable/HeightSpacer'
import { SIZES } from '../../constants/theme'

const Places = () => {
    const countries = [
        {
          "id": 1,
          "countryname": "Kenya",
          "description": "A vibrant East African nation known for its stunning wildlife, diverse cultures, and beautiful landscapes.",
          "imageurl": "https://example.com/kenya.jpg",
          "region": "Africa"
        },
        {
          "id": 2,
          "countryname": "Japan",
          "description": "A fascinating island nation with a rich history, unique traditions, and cutting-edge technology.",
          "imageurl": "https://example.com/japan.jpg",
          "region": "Asia"
        },
        {
          "id": 3,
          "countryname": "Brazil",
          "description": "A South American giant filled with vibrant culture, lush rainforests, and stunning beaches.",
          "imageurl": "https://example.com/brazil.jpg",
          "region": "South America"
        },
        {
          "id": 4,
          "countryname": "Italy",
          "description": "A European gem known for its ancient ruins, picturesque landscapes, and delicious cuisine.",
          "imageurl": "https://example.com/italy.jpg",
          "region": "Europe"
        },
        {
          "id": 5,
          "countryname": "Canada",
          "description": "A vast North American country with stunning natural beauty, diverse cities, and friendly people.",
          "imageurl": "https://example.com/canada.jpg",
          "region": "North America"
        }
      ]
      
  return (
    <View>
      <HeightSpacer height ={20}/>

      <VirtualizedList
      data={countries}
      /*we dont want the list to occupy the reset of the screen so*/
      horizontal
      keyExtractor={(item.id)}
      showsHorizontalScrollIndicator={false}
      getItemCount={(data) => data.length}
      getItem={(data, index) => data[index]}
      renderItem={({item, index}) => (
        <View style={{marginRight: SIZES.medium}}>
            <Text>{item.country}</Text>

        </View>
      )}
      />
    </View>
  )
}

export default Places

const styles = StyleSheet.create({})