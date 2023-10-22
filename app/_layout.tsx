import { Stack } from 'expo-router';
import CustomHeader from '../components/CustomHeader';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'landing',
};

export default function RootLayoutNav() {

  return (
    <Stack>
      <Stack.Screen name="landing" options={{
        headerShown: false
      }} />
      <Stack.Screen name="index" options={{}} />
    </Stack>
  );
}
