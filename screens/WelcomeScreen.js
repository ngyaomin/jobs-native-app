import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Job App', color: '#03a9f4' },
  { text: 'get ur dream job', color: '#009688' },
  { text: 'set location and swap away to your next money', color: '#03a9f4' }
];

class WelcomeScreen extends Component {
  render() {
    return (
      <Slides data={SLIDE_DATA} />
    );
  }
}

export default WelcomeScreen;
