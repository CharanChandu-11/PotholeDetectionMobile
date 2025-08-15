import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReportPothole() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Pothole Page</Text>
      <Text>Placeholder for form or camera upload</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});
    