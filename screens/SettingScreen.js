import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedJobs } from '../actions';

class SettingScreen extends Component {
  static navigationOptions = {
    header: {
      style: {
        marginTop: Platform.OS === 'andriod' ? 24 : 0
       }
    }
  }

  render() {
    return (
      <View>
        <Button
          title="Reset Liked jobs"
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F55336"
          onPress={this.props.clearLikedJobs}
        />
      </View>
    );
  }
}

export default connect(null, { clearLikedJobs })(SettingScreen);
