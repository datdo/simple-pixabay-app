import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import PixabayImage from './PixabayImage';

class ImageList extends React.Component {
  render() {
    return (
      <View>
        <Text>Results</Text>
        <FlatList
        data={this.props.data}
        renderItem={({item}) => <PixabayImage {...item} />}
            />
      </View>
    );
  }
}

export default ImageList;
