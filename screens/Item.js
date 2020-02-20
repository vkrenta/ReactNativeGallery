import React from 'react';
import {Text, View, Image} from 'react-native';

export default class Item extends React.Component {
  render() {
    // return <Text>{this.props.element.username}</Text>;
    return (
      <View>
        <Image
          style={{width: 60, height: 60}}
          source={{uri: this.props.element.thumb}}
        />
        <Text>{this.props.element.username}</Text>
      </View>
    );
  }
}
