import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './slides.style';
import {HeightSpacer, ReusableBtn, ReusableText} from '../../components/index';
import { COLORS, SIZES } from '../../constants/theme';
import { useNavigation } from "@react-navigation/native"

/*receive an item from a page*/
/*components are like tags whenever using a compnent make sure it imported on to */
const Slides = ({ item }) => {
  const navigation = useNavigation();
  return (
    /*view is just like a container, everything we write will be inside it*/
    <View>
        <Image source={item.image} style={styles.image}/>

            <View style={styles.stack}>
                <ReusableText
                  text={item.title}
                  family={"medium"}
                  size={SIZES.xxLarge}
                  color={COLORS.white}
                />

                <HeightSpacer height={30}/>

                <ReusableBtn 
                  onPress={()=> navigation.navigate('Bottom')}
                  btnText={"Let's go"}
                  width={(SIZES.width - 50) / 2.2}
                  backgroundColor={COLORS.red}
                  borderColor={COLORS.red}
                  borderWidth={0}
                  textColor={COLORS.white}
                />
                
            </View>
    </View>
  );
};

export default Slides