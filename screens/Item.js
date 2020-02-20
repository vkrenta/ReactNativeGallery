import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class Item extends React.Component {
  render() {
    // return <Text>{this.props.element.username}</Text>;
    return (
      <View style={styles.list}>
        <View style={styles.pictureContainer}>
          <Image
            style={styles.picture}
            source={{uri: this.props.element.thumb}}
          />
        </View>

        <View style={styles.info}>
          <Text>Author: {this.props.element.username}</Text>
          <Text>
            Description:{' '}
            {this.props.element.description ||
              this.props.element.alt_description ||
              'no description'}
          </Text>
        </View>
      </View>
    );
  }
}

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
  pictureContainer: {width: '25%'},
  info: {width: '70%'},
});
