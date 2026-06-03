import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../styles/counter';

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.card}>
        <Text style={styles.title}>Simple Counter App</Text>
        <Text style={styles.count}>{count}</Text>

        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={() => setCount(v => v - 1)}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => setCount(v => v + 1)}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>

        <Text style={styles.hint}>
          A new mini app inside <Text style={styles.code}>src/app</Text>.
        </Text>
      </View>
    </SafeAreaView>
  );
}