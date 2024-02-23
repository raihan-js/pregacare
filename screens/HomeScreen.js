import React from 'react';
import { ScrollView } from 'react-native';
import CardComponent from '../components/CardComponent'; // Adjust the import path as needed

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <CardComponent
        title="My Pregnancy Calendar"
        buttonTitle="Visit Calendar"
        routeName="Calendar"
        svgUri="../assets/1.svg"
      />
      <CardComponent
        title="My Tools"
        buttonTitle="View Tools"
        routeName="Tools"
        svgUri="../assets/1.svg"
      />
      {/* Add more cards as needed */}
    </ScrollView>
  );
}
