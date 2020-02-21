import React from 'react';
import {FlatList, View} from 'react-native';
import Item from './Item';
import getAllDocuments from '../api';

const extractKey = ({id}) => id;

const renderItem = ({item}) => {
  return <Item element={item} />;
};

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      picturesData: [],
    };
  }

  componentDidMount() {
    getAllDocuments()
      .then(data => {
        console.log('--------------------');
        let pictures = data.map(element => {
          const {
            id,
            urls: {raw, thumb},
            user: {username},
            description,
            alt_description,
            width,
            height,
          } = element;
          return {
            id,
            raw,
            thumb,
            username,
            description,
            alt_description,
            width,
            height,
          };
        });
        this.setState({picturesData: pictures});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.picturesData}
          renderItem={renderItem}
          keyExtractor={extractKey}
        />
      </View>
    );
  }
}
