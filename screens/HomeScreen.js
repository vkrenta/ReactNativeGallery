import React from 'react';
import {FlatList, View} from 'react-native';
import Item from './Item';
import getAllDocuments from '../api';

const rows = [
  {id: 0, text: 'fb.com'},
  {id: 1, text: 'pornhub.com'},
  {id: 2, text: 'github.com'},
  {id: 3, text: 'google.com'},
];

const extractKey = ({id}) => id;

const renderItem = ({item}) => {
  return <Item element={item.text} />;
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
          } = element;
          return {id, raw, thumb, username};
        });
        this.setState({picturesData: pictures});
      })
      .then(() => console.log(this.state));
  }

  render() {
    return (
      <View>
        <FlatList
          data={rows}
          renderItem={renderItem}
          keyExtractor={extractKey}
        />
      </View>
    );
  }
}
