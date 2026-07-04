import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Logo from './src/screens/logo/Logo';
import SignUp from './src/screens/signUp/SignUp';
import SignUpWith from './src/screens/signUpWith/SignUpWith';
import Login from './src/screens/login/Login';
import FinishSignIn from './src/screens/login/FinishSignIn';
import Home from './src/screens/home/Home';
import * as Linking from "expo-linking";

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Logo: "",
      Login: "login",
      FinishSignIn: "finishSignIn",
      Home: "home",
    },
  },
};
export default function App() {
  return (
    <NavigationContainer  linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Logo" component={Logo} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpWith" component={SignUpWith} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="FinishSignIn" component={FinishSignIn} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}