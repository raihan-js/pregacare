import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ToolScreen() {
  return (
    <View style={styles.screen}>
      <Text>My Tool</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
