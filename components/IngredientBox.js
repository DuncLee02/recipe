import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

class IngredientBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    };
  }

  elementClicked(name){
    console.log(name)
  }

  render() {
    if (!this.props.editing) {
      return (
        <View style={styles.listContainer} >
          {this.props.list.map( function(ingredient, index){
            return (
              <TouchableOpacity onPress={this.elementClicked.bind(null, ingredient)} key={index}>
                <View style={[styles.ingredientBoxes, {width: ingredient.length*10}]} >
                  <Text> {ingredient} </Text>
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
              <TouchableOpacity onPress={this.elementClicked.bind(null, ingredient)} key={index}>
                <View style={[styles.ingredientBoxesEditing, {width: ingredient.length*10}]} >
                  <Text> {ingredient} </Text>
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
    borderRadius: 20,
    height: 30,
    margin: 5
  },
  ingredientBoxesEditing: {
    backgroundColor: 'red',
    borderRadius: 20,
    height: 30,
    margin: 5
  },
});

module.exports = IngredientBox
