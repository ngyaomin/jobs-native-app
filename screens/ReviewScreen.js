import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  // static navigationOptions = {
  //   title: 'Review Jobs',
  //   headerRight: <Button title="Settings" onPress={() => {}} />,
  // };

  static navigationOptions = {
  title: 'Jobs Reviews',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Settings"
        onPress={() =>
          navigate()
        }
      />
    );
  }
  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

export default ReviewScreen;
