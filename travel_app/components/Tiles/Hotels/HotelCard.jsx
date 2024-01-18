import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, TEXT } from '../../../constants/theme'
import {HeightSpacer, NetworkImage, ReusableText} from '../../../components/index'

const HotelCard = ({item, margin}) => {
  return (
    <TouchableOpacity style={styles.card(margin)}>
        <View>
            <View style={imageContainer}>
                <NetworkImage 
                    source={item.imageUrl}
                    width={'90%'}
                    height={'100%'}
                    radius={16}
                
                />
            </View>

            <HeightSpacer height={5}/>

            <View style={{padding: 10}}>
            <ReusableText
                  text={'Hey User'}
                  family={"regular"}
                  size={TEXT.large}
                  color={COLORS.black}
                />
            </View>

        </View>

    </TouchableOpacity>
  )
}

export default HotelCard

const styles = StyleSheet.create({
    card: (margin) => ({
        width: SIZES.width/2.2,
        height: 250,
        borderRadius: 16,
        backgroundColor: COLORS.lightWhite,
        margin: margin
    }),
    imageContainer: {
        alignItems: "center",
        marginTop: 10,
        height: 150
    }
})