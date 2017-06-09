import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: ''  };

  }

  siriClicked() {
    console.log('siri clicked')
  }

  addIngredientClicked() {
    console.log("SearchBarLog: textInput is " + this.state.text)
    this.props.itemAdded(this.state.text)
  }

  render() {
    return (
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="What's in your Kitchen?"
          style={styles.SearchBarStyle}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          returnKeyType="done"
          onFocus={(text) => this.setState({text})}
          onSubmitEditing={this.addIngredientClicked.bind(this)}
        />
        <Button
          onPress={this.siriClicked}
          title="siri"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    height: 40,
    alignSelf: 'stretch',
  },
  SearchBarStyle: {
    backgroundColor: '#e0e0e0',
    height: 30,
    width: 260,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ffffff',
    marginLeft: 5
  }
});

module.exports = SearchBar
