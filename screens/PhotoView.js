import React from 'react';
import {Image, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

export default function PhotoView() {
  const {uri, width, height} = useSelector(state => state.picture);

  return (
    <ScrollView>
      <ScrollView horizontal={true}>
        <Image source={{uri}} style={{width, height}} />
      </ScrollView>
    </ScrollView>
  );
}
