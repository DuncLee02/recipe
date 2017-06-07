import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
var IngredientView = require('./components/IngredientBox');
var SearchView = require('./components/SearchBar');

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: ['radish', 'apple', 'peanut', 'salt', 'melon', 'beer', 'watermelon'],
      editing: false
    }
  }

  editListClicked() {
    console.log('editing toggled...')
    this.setState({
        editing: !this.state.editing
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style= {styles.yourKitchen}> Your Kitchen </Text>
        <SearchView list={this.state.itemAddedHandler}/>
        <IngredientView list={this.state.ingredients} editing={this.state.editing}/>
        <Button
          onPress={this.editListClicked.bind(this)}
          title="Edit List"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }

  itemAddedHandler() {
      console.log('adding to state')
        this.setState({
            ingredients: this.state.ingredients.concat('apple')
        });
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  yourKitchen: {
    marginTop: 30,
    marginBottom: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
