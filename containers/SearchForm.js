import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import SearchBox from '../components/SearchBox';


class SearchForm extends React.Component {

    submit(values) {
        console.log('submitting form', values);
        console.log('navigation', this.navigation);
        this.navigation.navigate('Results');
    };

    render() {
        const { handleSubmit, onSubmit } = this.props;
        return (
            <View style={styles.container}>
                <Text>Search Query:</Text>
                <Field name="query" component={SearchBox} />
                <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                <Text style={styles.button}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

SearchForm = reduxForm({ form: 'search' })(SearchForm);
export default SearchForm; 

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  container: {

  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
});

