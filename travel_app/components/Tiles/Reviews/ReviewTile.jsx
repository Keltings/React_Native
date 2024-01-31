import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import styles from './review.style'
import reusable from '../../Reusable/reusable.style';
import NetworkImage from '../../Reusable/NetworkImage';
import WidthSpacer from '../../Reusable/WidthSpacer';
import ReusableText from '../../Reusable/ReusableText';

const ReviewTile = ({review}) => {
  return (
    <View style={styles.reviewBorder}>
        <View style={reusable.rowWithSpace('space-between')}>
         <View style={reusable.rowWithSpace('flex-start')}>
            <NetworkImage
            source={review.user.profile}
            width={54}
            height={54}
            radius={10}
            />
            
            <WidthSpacer  width={20}/>

            <View>
                <View style={reusable.rowWithSpace('space-between')}>
                <ReusableText
                  text={hotel.location}
                  family={"regular"}
                  size={SIZES.small+2}
                  color={COLORS.gray}
        />

                </View>

            </View>
            </View>   

        </View>
    </View>
  )
}

export default ReviewTile
