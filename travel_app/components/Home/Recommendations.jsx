import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import reusable from '../Reusable/reusable.style';
import ReusableText from '../Reusable/ReusableText';
import { COLORS, TEXT } from '../../constants/theme';
import {Feather} from '@expo/vector-icons';

const Recommendations = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={[reusable.rowWithSpace('space-between '), {paddingBottom:20}]}>
                <ReusableText
                  text={'Recommendations'}
                  family={"medium"}
                  size={TEXT.large}
                  color={COLORS.black}
                />

                <TouchableOpacity onPress={()=> navigation.navigate('Recommended')}>
                    <Feather
                    name="list"
                    size={20}
                    />
                </TouchableOpacity>
        </View>
    </View>
  )
}

export default Recommendations

const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    }
})