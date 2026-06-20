import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.count}>{count}</Text>

      <View style={styles.controls}>
        <Pressable
          accessibilityLabel="Decrease count"
          accessibilityRole="button"
          style={styles.button}
          onPress={() => setCount((currentCount) => currentCount - 1)}>
          <Text style={styles.buttonText}>−</Text>
        </Pressable>

        <Pressable
          accessibilityLabel="Reset count"
          accessibilityRole="button"
          style={[styles.button, styles.resetButton]}
          onPress={() => setCount(0)}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </Pressable>

        <Pressable
          accessibilityLabel="Increase count"
          accessibilityRole="button"
          style={styles.button}
          onPress={() => setCount((currentCount) => currentCount + 1)}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    padding: 24,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0f172a',
  },
  count: {
    fontSize: 80,
    fontWeight: '800',
    color: '#4f46e5',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  button: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: '#4f46e5',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '700',
  },
  resetButton: {
    width: 88,
    backgroundColor: '#e2e8f0',
  },
  resetButtonText: {
    color: '#0f172a',
    fontSize: 16,
    fontWeight: '600',
  },
});
