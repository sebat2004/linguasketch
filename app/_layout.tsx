import { SplashScreen, Stack } from 'expo-router';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function RootLayoutNav() {

  return (
    <Stack>
      <Stack.Screen name="index" options={{}} />
    </Stack>
  );
}
