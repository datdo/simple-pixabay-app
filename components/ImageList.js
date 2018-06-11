import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import PixabayImage from './PixabayImage';
import { clickImage } from '../actions'

class ImageList extends React.Component {


  render() {
    const { data, navigate } = this.props;
    return (
      <View>
      <Text>Results</Text>
        <FlatList
          data={data}
          renderItem={({item}) => <PixabayImage {...item}
            onPress={() => {
              this.props.onClickImage(item.key);
              navigate();
            }} />
          }
        />
      </View>
    );
  }
}

export default ImageList;
