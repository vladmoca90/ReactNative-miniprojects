import { useState } from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

import { styles } from './styles/counter';

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.card}>
        <Text style={styles.title}>Counter</Text>
        <Text style={styles.count}>{count}</Text>

        <View style={styles.buttons}>
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
      </View>
    </SafeAreaView>
  );
}
