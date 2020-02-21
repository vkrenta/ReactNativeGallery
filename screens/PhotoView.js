import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

export default function PhotoView() {
  const pictureURL = useSelector(state => state.pictureURL);

  return (
    // <View>
    //   <Text>{pictureURL}</Text>
    // </View>
    <ScrollView>
      <ScrollView horizontal={true}>
        <Image source={{uri: pictureURL}} style={{width: 2000, height: 2000}} />
      </ScrollView>
    </ScrollView>
  );
}
