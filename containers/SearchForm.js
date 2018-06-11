import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import SearchBox from '../components/SearchBox';
import { fetchData } from '../actions.js';
import { apiKey } from '../secrets.js'


class SearchForm extends React.Component {

    submit(navigate) {
        return (values, dispatch) => {
            navigate();
            let query = values.query;
            dispatch(fetchData(query, apiKey));
        };
    }

    render() {
        const { handleSubmit, navigate } = this.props;
        return (
            <View style={styles.container}>
                <Text>Search Query:</Text>
                <Field name="query" component={SearchBox} />
                <TouchableOpacity onPress={handleSubmit(this.submit(navigate))}>
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

