import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

class RecipeMenu extends React.Component {

  menuSections = ['All', 'Breakfast', 'Lunch', 'Snack', 'Dinner']

  render() {
    return(
      <View style={styles.MenuContainer} >
        {this.menuSections.map( function(sectionName, index){
          return (
            <View key={index} >
              <Text
              style={[styles.MenuText, sectionName == this.props.chosenSection ? {color: '#000000'} : null ]}
              onPress={this.menuSectionSelected.bind(this, sectionName)}
              > {sectionName} </Text>
            </View>
          )
        }, this)}
      </View>
    )
  }

  menuSectionSelected(sectionName) {
    this.props.sectionChangeHandler(sectionName)
  }
}

const styles = StyleSheet.create({
  MenuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    borderTopColor: '#d1d1d1',
    borderTopWidth: 2
  },
  MenuText: {
    color: '#d1d1d1',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
  }

});

module.exports = RecipeMenu
