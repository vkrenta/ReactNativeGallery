import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

export default function PhotoView() {
  const pictureURL = useSelector(state => state.pictureURL);

  return (
    <View>
      <Text>{pictureURL}</Text>
    </View>
  );
}
