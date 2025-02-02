import { Stack } from 'expo-router';

import { QueryProvider } from '@/providers';

import '../global.css';

const RootLayout = () => {
  return (
    <QueryProvider>
      <Stack />
    </QueryProvider>
  );
};

export default RootLayout;
