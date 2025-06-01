import { Redirect, Stack } from 'expo-router';
import { useAuth } from '~/context/AuthContext';

export default function ProtectedLayout() {
  const user = useAuth();
  if (user === null) {
    return <Redirect href={'/(auth)/login'} />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
