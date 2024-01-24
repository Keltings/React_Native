import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBar from '../../components/Reusable/AppBar'

const Recommended = () => {
  return (
    <SafeAreaView style={{marginHorizontal:20}}>
      <View style={{height: 80}}>
        <AppBar  title={'Recommendation'} color={COLORS.white}/>

      </View>
    </SafeAreaView>
  )
}

export default Recommended
