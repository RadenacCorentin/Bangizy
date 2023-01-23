import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/HomePage/Home";
import Description from "./components/DescriptionPage/Description";
import Catch from "./components/CatchPage/Catch";
import Result from "./components/ResultPage/Result";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="CatchPage" component={Catch} />
        <Stack.Screen name="DescriptionPage" component={Description} />
        <Stack.Screen name="ResultPage" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
