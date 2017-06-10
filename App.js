import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
var IngredientView = require('./components/IngredientBox');
var SearchView = require('./components/SearchBar');
import RecipeMenu from './components/RecipeMenu';
import RecipeView from './components/RecipeView';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: ['radish', 'apple', 'peanut', 'salt', 'melon', 'beer', 'watermelon'],
      editing: false,
      chosenSection: 'All',
      recipeData: []
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style= {styles.yourKitchen}> Your Kitchen </Text>
        <SearchView itemAdded={this.itemAddedHandler.bind(this)}/>
        <IngredientView list={this.state.ingredients}
          editing={this.state.editing}
          removeItem={this.itemRemovedHandler.bind(this)}
        />
        <Button
          onPress={this.editListClicked.bind(this)}
          title="Edit List"
          color="#a9a9a9"
        />
        <RecipeMenu chosenSection={this.state.chosenSection} sectionChangeHandler={this.sectionChangeHandler.bind(this)}/>
        <RecipeView recipeData={this.state.recipeData} />
      </View>
    );
  }

  editListClicked() {
    console.log('editing toggled...')
    this.setState({
        editing: !this.state.editing
    });
  }

  itemRemovedHandler(textValue) {
    var index = this.state.ingredients.indexOf(textValue)
    if (index > -1) {
      var tempArray = this.state.ingredients
      tempArray.splice(index, 1)
      this.setState({
          ingredients: tempArray
      });
    }
    //this.fetchRecipes(this.state.chosenSection)
  }

  itemAddedHandler(textValue) {
      console.log(textValue)
        this.setState({
            ingredients: this.state.ingredients.concat(textValue)
        });
      //this.fetchRecipes(this.state.chosenSection)
    }

    sectionChangeHandler(sectionName) {
      console.log("App.js: changing section to " + sectionName )
      this.setState({
          chosenSection: sectionName,
      });
      this.fetchRecipes(sectionName)
    }


    //database fetch stuff

    appID = 'c97bb931'
    appKey = '11ac4687d5a00d60cbbb367194941255'

    fetchRecipes(sectionName) {
      url = "https://api.edamam.com/search?app_id=" + this.appID + "&app_key=" + this.appKey + "&from=0&to=10"
      for (let index in this.state.ingredients) {
        url += '&q=' + this.state.ingredients[index]
      }
      console.log(url)

      fetch(url).then( function(response) {
        if (response.ok) {
          return response
        }
      }).then(function(recipes) {
        this.setState(function() {
            recipeData: recipes
        })
      }.bind(this)).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });

      // fetch(url).then( function(response) {
      //   //console.log(response)
      //   this.setState(function() {
      //       recipeData: response.data.items
      //   })
      // }.bind(this)).catch(function(error) {
      //   console.log('There has been a problem with your fetch operation: ' + error.message);
      // });
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
