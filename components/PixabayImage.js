import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

class PixabayImage extends React.Component {
    render() {
        const {url, width, height, onPress} = this.props;
        return (
                <TouchableOpacity style={styles.imageContainer} onPress={onPress}>
                <Image style={{width, height}} source={{ uri: url }} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  imageContainer: {
      flex: 1,
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      height: 300,
      width: 300
  }
});

export default PixabayImage;
