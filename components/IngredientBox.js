import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

class IngredientBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    };
  }

  elementClicked(ingredient){
    console.log("IngredientBoxLog: element is " + ingredient)
    this.props.removeItem(ingredient)
  }

  render() {
    if (!this.props.editing) {
      return (
        <View style={styles.listContainer} >
          {this.props.list.map( function(ingredient, index){
            return (
              <TouchableOpacity key={index}>
                <View style={styles.ingredientBoxes} >
                  <Text style={styles.ingredientText}> {ingredient} </Text>
                </View>
              </TouchableOpacity>
            )
          }, this)}
        </View>
      )
    } else {
      return (
        <View style={styles.listContainer} >
          {this.props.list.map( function(ingredient, index){
            return (
              <TouchableOpacity onPress={this.elementClicked.bind(this, ingredient)} key={index}>
                <View style={styles.ingredientBoxesEditing} >
                  <Text style={styles.ingredientText}> {ingredient} </Text>
                </View>
              </TouchableOpacity>
            )
          }, this)}
        </View>
      )
    }
  }

}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  ingredientBoxes: {
    backgroundColor: 'orange',
    borderRadius: 10,
    height: 30,
    margin: 3
  },
  ingredientBoxesEditing: {
    backgroundColor: 'red',
    borderRadius: 10,
    height: 30,
    margin: 3
  },
  ingredientText: {
    color: '#000000',
    fontSize: 12,
    margin: 5
  }
});

module.exports = IngredientBox
