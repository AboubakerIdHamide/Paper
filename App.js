import { Home, Result, Paper, Help } from './components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const screenOptions = { headerShown: false };
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Paper"
          component={Paper}
        />
        <Stack.Screen
          name="Result"
          component={Result}
        />
        <Stack.Screen
          name="Help"
          component={Help}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};