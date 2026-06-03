import { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { initialCountries } from './data/initialCountries';

export default function EuropeCountriesComponent() {
  const [countries, setCountries] = useState(initialCountries);
  const [newCountry, setNewCountry] = useState('');

  const sortedCountries = useMemo(
    () => [...countries].sort((a, b) => a.localeCompare(b)),
    [countries]
  );

  const handleAddCountry = () => {
    const trimmed = newCountry.trim();
    if (!trimmed) return;

    if (
      countries.some(
        (country) => country.toLowerCase() === trimmed.toLowerCase()
      )
    ) {
      setNewCountry('');
      return;
    }

    setCountries((prev) => [...prev, trimmed]);
    setNewCountry('');
  };

  const handleDeleteCountry = (country: string) => {
    setCountries((prev) => prev.filter((item) => item !== country));
  };

  return (
    <SafeAreaView style={styles.page} edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Europe Countries</Text>
          <Text style={styles.subtitle}>
            {countries.length} countries in the list
          </Text>
        </View>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={newCountry}
            onChangeText={setNewCountry}
            placeholder="Add a country"
            placeholderTextColor="#9ca3af"
            returnKeyType="done"
            onSubmitEditing={handleAddCountry}
          />
          <Pressable style={styles.addButton} onPress={handleAddCountry}>
            <Text style={styles.addButtonText}>Add</Text>
          </Pressable>
        </View>

        <FlatList
          style={styles.list}
          data={sortedCountries}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>
              No countries left. Add one to get started.
            </Text>
          )}
          renderItem={({ item }) => (
            <View style={styles.countryRow}>
              <Text style={styles.countryText}>{item}</Text>
              <Pressable
                style={styles.deleteButton}
                onPress={() => handleDeleteCountry(item)}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </Pressable>
            </View>
          )}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginBottom: 18,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0f172a',
  },
  subtitle: {
    marginTop: 6,
    color: '#64748b',
    fontSize: 16,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#0f172a',
    backgroundColor: '#fff',
  },
  addButton: {
    borderRadius: 14,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  list: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
    padding: 12,
  },
  separator: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 8,
  },
  countryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  countryText: {
    fontSize: 16,
    color: '#0f172a',
    flex: 1,
    flexWrap: 'wrap',
  },
  deleteButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#ef4444',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
  emptyText: {
    color: '#64748b',
    textAlign: 'center',
    marginTop: 32,
    fontSize: 16,
  },
});