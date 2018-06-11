import React, { Component } from 'react';
import {  StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { connect } from 'react-redux';

class Details extends Component {
  render() {
    const { url, height, width, user, likes } = this.props;
    return (
      <ScrollView styles={styles.container} >
        <View style={ styles.photo }>
          <Image
            source={{uri: url}}
            style={{height, width}}
          />
        </View>
        <Text>user: {user}</Text>
        <Text>likes: {likes}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  photo: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  text: {
    
  }
});

const mapStateToProps = state => {
  let key = state.currentImage;
  if (key == null) return {loading: true}
  let data = state.data.find(img => img.id.toString() == key);
  return {
    url: data.webformatURL,
    height: data.webformatHeight,
    width: data.webformatWidth,
    user: data.user,
    likes: data.likes
  };
};

export default connect(mapStateToProps)(Details);
