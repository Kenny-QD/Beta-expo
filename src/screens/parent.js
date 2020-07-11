  
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/styles.js'

export default function Parent() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Parent Profile</Text>
    </View>
  )
  }