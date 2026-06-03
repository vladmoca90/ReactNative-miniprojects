import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.card}>
        <Text style={styles.title}>Simple Counter App</Text>
        <Text style={styles.count}>{count}</Text>
        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={() => setCount((value) => value - 1)}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => setCount((value) => value + 1)}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
        <Text style={styles.hint}>A new mini app inside <Text style={styles.code}>src/app</Text>.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#eef2ff',
  },
  card: {
    width: '100%',
    maxWidth: 420,
    padding: 24,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    gap: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
  },
  count: {
    fontSize: 72,
    fontWeight: '800',
    color: '#4f46e5',
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    width: 72,
    height: 72,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4f46e5',
  },
  buttonText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
  },
  hint: {
    marginTop: 8,
    textAlign: 'center',
    color: '#6b7280',
  },
  code: {
    fontFamily: 'monospace',
    color: '#111827',
  },
});
