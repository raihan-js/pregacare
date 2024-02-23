import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgUri } from 'react-native-svg'; // Correct import for SVG handling

export default function CardComponent({ title, buttonTitle, routeName, svgUri }) {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(routeName)}
        >
          <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
      </View>
      <SvgUri width="100" height="100" uri={svgUri} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ff6347', // Tomato red
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    marginRight: 20, // Give some space between the text/button and the SVG
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Inter', // Set Inter font
  },
  button: {
    backgroundColor: '#fff',
    marginTop: 10, // Add space between the title and the button
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start', // Align button to the start of the flex container
  },
  buttonText: {
    color: '#ff6347',
    fontFamily: 'Inter', // Set Inter font
  },
});
