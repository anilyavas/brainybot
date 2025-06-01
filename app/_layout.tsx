import { AuthProvider } from '~/context/AuthContext';
import '../global.css';

import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(protected)/(tabs)" />
      </Stack>
    </AuthProvider>
  );
}
