import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import PixabayImage from './PixabayImage';

class ImageList extends React.Component {
  state = { data: [] }

  setData(data) {
    this.state.data = data;
  }

  render() {
    return (
      <View>  
        <Text>Results</Text>
        <FlatList
        data={[
            {
                key: 'a',
                url: 'https://cdn.pixabay.com/photo/2014/12/23/07/40/hulk-578088_150.jpg',
                width: 150,
                height: 99
            },
            {
                key: 'b',
                url: 'https://cdn.pixabay.com/photo/2016/07/18/23/37/incredible-hulk-1527199_150.jpg',
                width:150,
                height:99
            },
            {
                key: '667988',
                url: 'https://cdn.pixabay.com/photo/2015/03/11/01/33/hulk-667988_150.jpg',
                width:150,
                height:99
            },
        ]}
        renderItem={({item}) => <PixabayImage {...item} />}
            />
      </View>
    );
  }
}

export default ImageList;
