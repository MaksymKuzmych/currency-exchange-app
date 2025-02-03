import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { QueryProvider } from '@/providers';

import '../global.css';

const RootLayout = () => {
  return (
    <QueryProvider>
      <SafeAreaProvider>
        <Stack screenOptions={{ title: 'Latest Exchange Rates' }} />
      </SafeAreaProvider>
    </QueryProvider>
  );
};

export default RootLayout;
