import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TEXT, COLORS } from '../../../constants/theme'
import {HeightSpacer, NetworkImage, ReusableText} from '../../../components/index'
import { useNavigation } from '@react-navigation/native'

const Country = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=> navigation.navigate('CountryDetails', {item} )}>
        <View>
        <NetworkImage 
        source={item.imageurl} 
        width={85} 
        height={85} 
        radius={12}
        />
        <HeightSpacer height={5}/>
        <ReusableText
                  text={item.countryname}
                  family={"medium"}
                  size={TEXT.large}
                  color={COLORS.black}
                  align={"center"}
                />

        </View>
    </TouchableOpacity>
  )
}

export default Country