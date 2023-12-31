import { Stack } from 'expo-router';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'landing_page',
};

export default function RootLayoutNav() {

  return (
    <Stack>
      <Stack.Screen name="landing_page" options={{
        headerShown: false
      }} />
    </Stack>
  );
}
