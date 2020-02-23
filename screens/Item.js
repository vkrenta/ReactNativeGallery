import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {setPicture} from '../actions';
import {useDispatch} from 'react-redux';

const Item = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(
          setPicture({
            uri: props.element.raw,
            width: props.element.width,
            height: props.element.height,
          }),
        );
        navigation.navigate('Photo');
      }}>
      <View style={styles.list}>
        <View style={styles.pictureContainer}>
          <Image style={styles.picture} source={{uri: props.element.thumb}} />
        </View>

        <View style={styles.info}>
          <Text>Author: {props.element.username}</Text>
          <Text>
            Description:{' '}
            {props.element.description ||
              props.element.alt_description ||
              'no description'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  picture: {
    width: 60,
    height: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 1,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'skyblue',
  },
  pictureContainer: {width: 80},
  info: {width: '73%'},
});

export default Item;
