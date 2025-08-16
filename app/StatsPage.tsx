import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Stats</Text>
      <Text>Placeholder for pothole statistics</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});
