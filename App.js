import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Logo from './src/screens/logo/Logo';
import SignUp from './src/screens/signUp/SignUp';
import SignUpWith from './src/screens/signUpWith/SignUpWith';
import Login from './src/screens/login/Login';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Logo" component={Logo} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpWith" component={SignUpWith} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}