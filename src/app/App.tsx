import { SafeAreaProvider } from 'react-native-safe-area-context';
import CountriesList from './index';

export default function App() {
  return (
    <SafeAreaProvider>
      <CountriesList />
    </SafeAreaProvider>
  );
}