import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MapPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map Page</Text>
      <Text>Placeholder for map showing pothole locations</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});
