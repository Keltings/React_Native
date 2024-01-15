import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React from 'react'
import reusable from '../../components/Reusable/reusable.style'
import { HeightSpacer, ReusableText, Places } from '../../components'
import {TEXT, COLORS, SIZES} from '../../constants/theme'
import {AntDesign} from '@expo/vector-icons'
import styles from './home.style'

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWithSpace('space-between')}>

        <ReusableText
                  text={'Hey User'}
                  family={"regular"}
                  size={TEXT.large}
                  color={COLORS.black}
                />

                <TouchableOpacity style={styles.box}
                onPress={()=> navigation.navigate('Search')}>
                  <AntDesign
                  name='search1'
                  size={26}/>

                </TouchableOpacity>
        </View>

        <HeightSpacer height={SIZES.xLarge}/>

        <ReusableText
                  text={'Places'}
                  family={"medium"}
                  size={TEXT.large}
                  color={COLORS.black}
                />
                <Places/>
      </View>
    </SafeAreaView>
  )
}

export default Home

