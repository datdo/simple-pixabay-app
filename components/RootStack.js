import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Pixabay App</Text>
        <Button
          title="Begin"
          onPress={() => this.props.navigation.navigate('Search')}
        />
      </View>
    );
  }
}

class SearchScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search Screen</Text>
      </View>
    );
  }
}

class ResultsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Results Screen</Text>
      </View>
    );
  }
}


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
      height: 20,
      width: 200
  }
});


const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Search: SearchScreen,
        Results: ResultsScreen,
        Details: DetailsScreen
    },
    {
        initialRouteName: "Home"
    }
);

export default RootStack;
