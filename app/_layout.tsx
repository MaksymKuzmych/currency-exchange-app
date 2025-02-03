import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { FavoritesProvider, QueryProvider } from '@/providers';

import '../global.css';

const RootLayout = () => {
  return (
    <QueryProvider>
      <FavoritesProvider>
        <SafeAreaProvider>
          <Stack screenOptions={{ title: 'Latest Exchange Rates' }} />
        </SafeAreaProvider>
      </FavoritesProvider>
    </QueryProvider>
  );
};

export default RootLayout;
