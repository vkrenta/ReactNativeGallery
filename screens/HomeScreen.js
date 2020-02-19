import React from 'react';
import {FlatList, View, Text} from 'react-native';

const rows = [
  {id: 0, text: 'fb.com'},
  {id: 1, text: 'pornhub.com'},
  {id: 2, text: 'github.com'},
  {id: 3, text: 'google.com'},
];

const extractKey = ({id}) => id;

export default class HomeScreen extends React.Component {
  renderItem = ({item}) => {
    return <Text>{item.text}</Text>;
  };
  render() {
    return (
      <View>
        <FlatList
          data={rows}
          renderItem={this.renderItem}
          keyExtractor={extractKey}
        />
      </View>
    );
  }
}
