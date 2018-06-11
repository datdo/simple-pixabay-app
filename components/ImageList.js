import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import PixabayImage from './PixabayImage';

class ImageList extends React.Component {
  render() {
    const { data, navigate } = this.props;
    return (
      <View>
        <Text>Results</Text>
        <FlatList
          data={data}
          renderItem={({item}) => <PixabayImage {...item} onPress={navigate} />}
        />
      </View>
    );
  }
}

export default ImageList;
