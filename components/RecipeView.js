import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

class RecipeDisplay extends React.Component {

  render() {
    console.log("---rerendering recipe list---")
    return(
      <View style={styles.MenuContainer} >
        {!this.props.recipeData
          ? <Text>Loading</Text>
          : <RecipeList recipes={this.props.recipeData}/>
        }
      </View>
    )
  }

  menuSectionSelected(sectionName) {
    this.props.sectionChangeHandler(sectionName)
  }

}

function RecipeList(props) {
  return(
    <View>
    <Text> recipes: </Text>
    {console.log("recipe data: " + props.recipes)}
    {props.recipes.map( function(aRecipe, index) {
      return(
          <Text> aRecipe </Text>
      )
    })}
    </View>
  )
}

const styles = StyleSheet.create({
  MenuContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  MenuText: {

  }

});

module.exports = RecipeDisplay
