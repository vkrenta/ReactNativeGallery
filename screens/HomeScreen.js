import React from 'react';
import {FlatList, View} from 'react-native';
import Item from './Item';
import {useSelector} from 'react-redux';

const extractKey = ({id}) => id;

const renderItem = ({item}) => {
  return <Item element={item} />;
};

const HomeScreen = () => {
  const picturesData = useSelector(state => state.apiData);

  return (
    <View>
      <FlatList
        data={picturesData}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />
    </View>
  );
};

export default HomeScreen;
