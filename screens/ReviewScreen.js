import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ReviewScreen extends Component {
  static navigationOptions = {
    title: 'Review Jobs',
    headerRight: <Button title="Info" />,
};

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
